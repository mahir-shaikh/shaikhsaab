import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.styl']
})
export class NewPostComponent implements OnInit {
  title = '';
  description = '';
  status = 'Public'
  allowComments = true;

  constructor(
    private postService: PostsService
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    //todo: form validation
    let obj = {
      title: this.title,
      description: this.description,
      status: this.status,
      allowComments: this.allowComments
    }
    this.postService.createNewPost(obj).then((response)=>{
      console.log(response)
    })
  }

}
