import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.styl']
})
export class AllPostComponent implements OnInit {
  postData;
  loading = false;

  constructor(
    private postService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchAllPosts()
  }

  fetchAllPosts(){
    this.loading = true
    this.postService.getAllPosts().then(posts=>{
      this.postData = posts
      this.loading = false
    })
  }

  editPost(data){
    this.router.navigate(['/admin','editpost', data._id])
  }

  deletePost(data){
    let confirmRespose = confirm("Are you sure you want to delete this blog post? You cannot undo this action later.")
    if(confirmRespose){
      this.postService.deletePost(data._id).then(()=>{
        this.fetchAllPosts();
      })
    }
  }

  viewComments(data){
    this.router.navigate(['/admin','comments',data._id])
  }
}
