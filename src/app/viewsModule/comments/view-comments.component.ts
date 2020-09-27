import { Component, OnInit, Input } from '@angular/core';
import { PostingDataService } from '../view-services/posting-data.service';
import { POST } from 'src/app/interfaces/post.interface';
import { COMMENT } from 'src/app/interfaces/comment.interface';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrls: ['./view-comments.component.styl']
})
export class ViewCommentsComponent implements OnInit {
  @Input() comments: Array<COMMENT>;

  constructor(
  ) { }

  ngOnInit() {

  }
}
