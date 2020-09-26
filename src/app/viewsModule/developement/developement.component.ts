import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../view-services/fetching-data.service';
import { debug } from 'util';
import { POST } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-developement',
  templateUrl: './developement.component.html',
  styleUrls: ['./developement.component.styl']
})
export class DevelopementComponent implements OnInit {

  isClosing = false;
  isOpening = true;
  modalShow: boolean = true;
  expanded = false;
  activePostId = '';
  activePost: POST;

  postData: Array<POST>;


  constructor(
    private router: Router,
    private fetchDataService: FetchingDataService
  ) { }

  ngOnInit() {
    this.isClosing = false;
    this.isOpening = true;

    this.fetchAllPosts();
  }


  onClose() {
    this.isClosing = true;
    this.isOpening = false;
    this.modalShow = false;
    // let regex = new RegExp("(/)?" +RESOURCES_ROUTE + "(//)?");
    // let newUrl = this.router.url.replace(regex, '');
    // setTimeout(() => this.router.navigateByUrl(newUrl), 1000);
    setTimeout(() => this.router.navigateByUrl("/dashboard"), 1000);
  }

  fetchAllPosts(){
    this.fetchDataService.getAllPosts().then((response)=>{
      this.postData = response;

      //Filter out all private and blogs in draft mode
      this.postData = this.postData.filter((object: POST)=>{
        return object.status == "public"
      })
    })
  }

  showPost(post: POST){
    this.expanded=true; 
    this.activePostId = post._id;
    this.activePost = this.getPostById(this.activePostId)
  }

  getPostById(id){
    let posts = this.postData.filter((obj)=>{
      return obj._id == id;
    })

    return posts[0] ? posts[0] : null;
  }

}

