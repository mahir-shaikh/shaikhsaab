import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.styl']
})
export class EditPostComponent implements OnInit {
  post;
  private id;

  title: String;
  description: String;
  status: String
  allowComments: boolean;

  private routeObserver: Subscription;

  constructor(
    private postService: PostsService,
    private router: Router,
    private route: ActivatedRoute,
    private alertService: AlertService
  ) { 
    
  }

  ngOnInit() {
    this.routeObserver = this.route.params.subscribe(data=>{
      this.id = data.id;
      this.onRouteChange()
    }) 
  }

  onRouteChange(){
    if(this.id){
      this.postService.getPost(this.id).then((post)=>{
        this.post = post

        this.title = this.post.title;
        this.description = this.post.description;
        this.status = this.post.status;
        this.allowComments = this.post.allowComments;
      })
    }
  }

  ngOnDestroy(){
    if( this.routeObserver){
      this.routeObserver.unsubscribe()
    }
  }

  editPost(){
    let updatedPost = {
      title: this.title,
      description: this.description,
      status: this.status,
      allowComments: this.allowComments
    }
    this.postService.editPost(this.id, updatedPost).then((response)=>{
      if(response.success){
        this.alertService.success(response.message, {autoClose: true, keepAfterRouteChange: true})
        this.router.navigate(['/admin/allposts']);
      }else{
        this.alertService.error(response.message)
      }
    })
  }

}
