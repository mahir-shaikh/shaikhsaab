import { Component, OnInit, ElementRef, ViewChild, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { environment } from 'src/environments/environment';
import { debug } from 'util';
import { CommunicatorService } from 'src/app/shared/services/communicator.service';
import { EVENTS } from 'src/app/constants';
import { AlertService } from 'src/app/shared/services/alert.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-upload',
  templateUrl: './view-upload.component.html',
  styleUrls: ['./view-upload.component.styl']
})
export class ViewUploadComponent implements OnInit {
  @Input() isFileChooser = false;
  @Output() fileSelected = new EventEmitter();

  imageData: Array<Object> = [];
  URL = environment.serverURL + "/";
  imageIndex = 0;
  isModalVisible = false;
  @ViewChild('ImageModal', {static: false}) public ImageModalRef: ElementRef;
  // private modal: ElementRef;
  modalRef: BsModalRef;
  modalConfig = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-lg image-details',
    keyboard: true
  };

  constructor(
    private uploadService: UploadService,
    private communicator: CommunicatorService,
    private alertService: AlertService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.fetchImages()
    this.communicator.getEmitter(EVENTS.REFRESH_GALLERY).subscribe(()=>{
      this.fetchImages();
    })

  }

  fetchImages() {
    this.uploadService.getImages().then((data) => {
      // this.imageData = data.map((image) => {
      //   return this.URL + image;
      // })
      if(data.resources){
        this.imageData = [];
        data.resources.map((resource)=>{this.imageData.push(
          {
            'url': resource.url,
            'public_id': resource.public_id
          }
        )})
      }
    }).catch((err)=>{
      this.alertService.error(err)
    })
  }

  openModal() {
    // this.ImageModalRef.nativeElement.style.display = "block";
    
    // var body = document.getElementsByTagName("body")[0];
    // this.modal = this.ImageModalRef;
    // if (this.modal) {
      //   body.appendChild(this.modal.nativeElement);
      // }
    this.isModalVisible = true;
    this.modalRef = this.modalService.show(this.ImageModalRef, this.modalConfig);
  }

  closeModal() {
    // this.ImageModalRef.nativeElement.style.display = "none";
    
    // var body = document.getElementsByTagName("body")[0];
    // if (this.modal) {
      //     body.removeChild(this.modal.nativeElement);
      // }
    this.isModalVisible = false;
    if(this.modalRef){
      this.modalRef.hide();
    }
  }

  setSelection(index){
    this.imageIndex = index;
    this.openModal();
  }

  // copyName(){
  //   let currentUrl = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
  //   let name = currentUrl.slice(currentUrl.lastIndexOf("/")+1)
  //   this.CopyToClipboard(name)
  // }

  // copyURL(relative= false){
  //   let currentUrl = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
  //   if(relative){
  //     currentUrl = currentUrl.slice(this.URL.length)
  //   }
  //   this.CopyToClipboard(currentUrl)
  // }

  deleteImage(){
    let currentObj = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
    let relativeUrl = currentObj['public_id']
    this.uploadService.deleteImage(relativeUrl).then((response)=>{
      if(response.success){
        this.alertService.success(response.message)
        this.closeModal();
        this.fetchImages();
      }else{
        this.closeModal();
        this.alertService.error(response.message)
      }
    }).catch((err)=>{
      this.closeModal();
      this.alertService.error(err)
    })
  }

  CopyToClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

  onColorChange(e){
    // debugger
  }

  selectImage(){
    this.closeModal();
    
    let currentObj = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
    let currentUrl = currentObj['url']

    this.fileSelected.emit(currentUrl);
  }

}
