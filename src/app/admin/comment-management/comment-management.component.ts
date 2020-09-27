import { Component, OnInit } from '@angular/core';
import { COMMENT } from 'src/app/interfaces/comment.interface';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { POST } from 'src/app/interfaces/post.interface';
import { CommentsService } from '../services/comments.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-comment-management',
  templateUrl: './comment-management.component.html',
  styleUrls: ['./comment-management.component.styl']
})
export class CommentManagementComponent implements OnInit {
  private id;
  post: POST;
  commentData: Array<COMMENT>

  private routeObserver: Subscription;

  constructor(
    private postService: PostsService,
    private commentService: CommentsService,
    private alertService: AlertService,
    private route: ActivatedRoute
  ) { }

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

        this.commentData = this.post.comments;
      })
    }
  }

  getDate(date){
    return moment(date).format('DD-MM-YYYY, h:mm:ss a');
  }

  deleteComment(comment: COMMENT){
    let confirmResponse = confirm("Are you sure you want to delete this comment? You cannot undo this action!!!")
    if(confirmResponse){
      this.commentService.deleteComment(comment._id).then((response)=>{
        if(response.success){
          this.alertService.success(response.message)
          //Get latest comments
          this.onRouteChange()
        }else{
          this.alertService.error(response.message)
        }
      })
    }
  }

  toggleCommentApproval(value, comment: COMMENT ){
    this.commentService.editComment(comment._id,{
      'commentIsApproved': value
    }).then((data)=>{
      if(data.success){
        this.alertService.success(data.message)
      }else{
        this.alertService.error(data.message)
      }
    })
  }

}
