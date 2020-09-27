import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  

  constructor(private http: HttpWrapperService) { }


  editComment(id,data){
    let obj = {
      id: id,
      comment: data
    }
    return this.http.postJson("/editComment", obj);
  }

  deleteComment(id){
    let obj = {
      id: id
    }
    return this.http.postJson("/deleteComment", obj);
  }

}
