import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { FormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    AdminComponent,
    NewPostComponent,
    AllPostComponent,
    EditPostComponent
  ],
  declarations: [
    AdminComponent, 
    LoginComponent,
    NewPostComponent,
    AllPostComponent,
    EditPostComponent
  ],
  providers: [
    PostsService
  ]
})
export class AdminModule { }
