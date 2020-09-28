import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpWrapperService
  ) { }

  uploadImage(formData){
    return this.http.postJson('/uploadImages', formData);
  }

  getImages(){
    return this.http.getJson('/getAllImages',{})
  }

  deleteImage(relativePath){
    let obj = {
      path: relativePath
    }
    return this.http.postJson('/deleteImage',obj)
  }

}
