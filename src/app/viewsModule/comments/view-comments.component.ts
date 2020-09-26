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
  @Input() postID;
  colors = []

  constructor(
  ) { }

  ngOnInit() {
    for(let i=0; i<this.comments.length;i++){
      this.colors.push("#"+this.getRandomColor());
    }
  }

  getInitials(name){
    let initial = ''
    name.split(' ').map((element: string) => {
      initial += element.slice(0,1)
    });

    return initial;
  }

  getRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16);
  }

}
