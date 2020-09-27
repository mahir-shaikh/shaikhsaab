import { Component, OnInit, Input } from '@angular/core';
import { POST } from 'src/app/interfaces/post.interface';
import * as moment from 'moment';
import { FetchingDataService } from '../view-services/fetching-data.service';


@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.styl']
})
export class BlogArticleComponent implements OnInit {
  @Input() post: POST;
  date;

  constructor(
    private dataFetchingService: FetchingDataService
  ) { }

  ngOnInit() {
    this.date = moment(this.post.creationDate).format('MMMM Do YYYY, h:mm:ss a');;

  }

  updateComments(){
    this.dataFetchingService.getPost(this.post._id).then((updatedPost)=>{
      this.post = updatedPost
    })
  }



}
