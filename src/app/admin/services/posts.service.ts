import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  

  constructor(private http: HttpClient) { }

  createNewPost(post){
    return this.http.post(environment.serverURL+"/newpost", post).toPromise();
  }

  getAllPosts(){
    return this.http.get(environment.serverURL+"/getAllPosts", {}).toPromise();
  }

  getPost(data){
    let obj = {
      id: data
    }
    return this.http.post(environment.serverURL+"/getPost", obj).toPromise();
  }

  editPost(id,data){
    let obj = {
      id: id,
      post: data
    }
    return this.http.post(environment.serverURL+"/editPost", obj).toPromise();
  }

  deletePost(id){
    let obj = {
      id: id
    }
    return this.http.post(environment.serverURL+"/deletePost", obj).toPromise();
  }

}
