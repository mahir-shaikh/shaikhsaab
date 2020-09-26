import { Component, OnInit } from '@angular/core';
import { COMMENT } from 'src/app/interfaces/comment.interface';
import * as moment from 'moment';

@Component({
  selector: 'app-comment-management',
  templateUrl: './comment-management.component.html',
  styleUrls: ['./comment-management.component.styl']
})
export class CommentManagementComponent implements OnInit {
  commentData: Array<COMMENT>

  constructor() { }

  ngOnInit() {
  }

  getDate(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');;
  }

}
