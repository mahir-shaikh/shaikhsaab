import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-new-upload',
  templateUrl: './new-upload.component.html',
  styleUrls: ['./new-upload.component.styl']
})
export class NewUploadComponent implements OnInit {
  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  images;
  fileInputLabel;

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    if(event.target.files.length > 0){
      const files = event.target.files;
      this.images = files;

      
      this.fileInputLabel = Array.from(files).reduce((total, currentValue, currentIndex, arr)=>{
        return total ? total + ', ' +currentValue['name'] : currentValue['name']
      },'');
    }
  }

  onSubmit() {

    // if (this.image == undefined) {
    //   alert('Please fill valid details!');
    //   return false;
    // }

    const formData = new FormData();
    for(let img of this.images){
      formData.append('files', img);
    }


   this.uploadService.uploadImage(formData).then((response)=>{
    if(response.succes){
      this.alertService.success(response.message)
      this.images = undefined
    }
  }).catch((err)=>{
    this.alertService.error(err.message)
   })
  }

}
