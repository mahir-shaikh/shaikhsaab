import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { Router } from '@angular/router';

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
    private alertService: AlertService,
    private postService: PostsService,
    private router: Router
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
      if(response.success){
        this.alertService.success(response.message, {autoClose: true, keepAfterRouteChange: true})
        this.router.navigate(['/admin/allposts']);
      }else{
        this.alertService.error(response.message)
      }
    })
  }

}
