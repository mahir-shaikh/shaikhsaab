import { Component, OnInit, Input } from '@angular/core';
import { PostingDataService } from '../view-services/posting-data.service';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.styl']
})
export class PostCommentComponent implements OnInit {
  @Input() postID = '';
  name = '';
  comment = '';

  constructor(
    private postingDataService: PostingDataService
  ) { }

  ngOnInit() {
  }

  submitComment(){
    if(this.name && this.comment){
      this.postingDataService.postComment(this.postID, this.name, this.comment).then(()=>{
        
      })
    }
  }

}
