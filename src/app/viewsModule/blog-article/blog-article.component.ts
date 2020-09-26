import { Component, OnInit, Input } from '@angular/core';
import { POST } from 'src/app/interfaces/post.interface';
import * as moment from 'moment';


@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.styl']
})
export class BlogArticleComponent implements OnInit {
  @Input() post: POST;
  date;

  constructor() { }

  ngOnInit() {
    this.date = moment(this.post.creationDate).format('MMMM Do YYYY, h:mm:ss a');;

  }



}
