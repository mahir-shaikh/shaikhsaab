import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostingDataService } from '../view-services/posting-data.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.styl']
})
export class PostCommentComponent implements OnInit {
  @Input() postID = '';
  @Input() disableComments = false;
  name = '';
  comment = '';
  @Output() newCommentSubmitted =  new EventEmitter();

  constructor(
    private postingDataService: PostingDataService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }

  submitComment(){
    if(this.name && this.comment){
      this.postingDataService.postComment(this.postID, this.name, this.comment).then(()=>{
        this.newCommentSubmitted.emit();
        this.name = ''
        this.comment = ''
        this.alertService.success('Comment Added successfully')
      })
    }
  }

}
