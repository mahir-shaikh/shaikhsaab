import { Injectable } from '@angular/core';
import { HttpWrapperService } from 'src/app/admin/services/http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  constructor(private http: HttpWrapperService) { }

  getAllPosts() {
    return this.http.getJson("/getAllPosts", null);
  }

  getPost(postId) {
    let obj = {
      id: postId
    }
    return this.http.postJson("/getPost", obj);
  }

}
