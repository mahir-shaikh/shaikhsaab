import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-upload',
  templateUrl: './view-upload.component.html',
  styleUrls: ['./view-upload.component.styl']
})
export class ViewUploadComponent implements OnInit {
  imageData: Array<String>
  URL = environment.serverURL + "/";
  imageIndex = 0;
  isModalVisible = false;
  @ViewChild('ImageModal', {static: false}) public ImageModalRef: ElementRef;

  constructor(
    private uploadService: UploadService
  ) { }

  ngOnInit() {
    this.fetchImages()
  }

  fetchImages() {
    this.uploadService.getImages().then((data) => {
      this.imageData = data.map((image) => {
        return this.URL + image;
      })
    })
  }

  openModal() {
    this.isModalVisible = true;
    this.ImageModalRef.nativeElement.style.display = "block";
  }

  closeModal() {
    this.ImageModalRef.nativeElement.style.display = "none";
    this.isModalVisible = false;
  }

  setSelection(index){
    this.imageIndex = index;
    this.openModal();
  }

  copyName(){
    let currentUrl = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
    let name = currentUrl.slice(currentUrl.lastIndexOf("/")+1)
    this.CopyToClipboard(name)
  }

  copyURL(relative= false){
    let currentUrl = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
    if(relative){
      currentUrl = currentUrl.slice(this.URL.length)
    }
    this.CopyToClipboard(currentUrl)
  }

  deleteImage(){
    let currentUrl = this.imageData[this.imageIndex] // "http://localhost:9999/uploads/images/logo_autodesk.png",
    let relativeUrl = currentUrl.slice(this.URL.length)
    this.uploadService.deleteImage(relativeUrl)
  }

  CopyToClipboard(value) {
    var tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }

}
