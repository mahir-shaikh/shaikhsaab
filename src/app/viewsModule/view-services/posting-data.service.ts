import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'src/app/admin/services/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class PostingDataService {

  constructor(private http: HttpWrapperService) { }

  postComment(postID, name, comment){
    return this.http.postJson("/postComment", {postID: postID, name: name, comment: comment})
  }

}
