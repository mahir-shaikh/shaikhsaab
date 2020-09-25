import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  constructor(private http: HttpWrapperService) { }

  createNewPost(post){
    return this.http.postJson("/newpost", post);
  }

  getAllPosts(){
    return this.http.getJson("/getAllPosts", null);
  }

  getPost(data){
    let obj = {
      id: data
    }
    return this.http.postJson("/getPost", obj);
  }

  editPost(id,data){
    let obj = {
      id: id,
      post: data
    }
    return this.http.postJson("/editPost", obj);
  }

  deletePost(id){
    let obj = {
      id: id
    }
    return this.http.postJson("/deletePost", obj);
  }

}
