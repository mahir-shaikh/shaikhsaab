import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterModule } from '@angular/router';
import { AllPostComponent } from './all-post/all-post.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpAuthenticationInterceptor } from './interceptors/authenticate.http.interceptor';
import { HttpWrapperService } from './services/http-wrapper.service';
import { CommentManagementComponent } from './comment-management/comment-management.component';
import { SharedModule } from '../shared/shared.module';
import { NewUploadComponent } from './uploads/new-upload/new-upload.component';
import { ViewUploadComponent } from './uploads/view-upload/view-upload.component';
import { UploadService } from './services/upload.service';
import { UploadsComponent } from './uploads/uploads.component';
import { ExperienceManagementComponent } from './experience-management/experience-management.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    AdminComponent,
    NewPostComponent,
    AllPostComponent,
    EditPostComponent,
    CommentManagementComponent,
    UploadsComponent,
    ExperienceManagementComponent
  ],
  declarations: [
    AdminComponent, 
    LoginComponent,
    NewPostComponent,
    AllPostComponent,
    EditPostComponent,
    CommentManagementComponent,
    NewUploadComponent,
    ViewUploadComponent,
    UploadsComponent,
    ExperienceManagementComponent
  ],
  providers: [
    PostsService, AuthService, AuthGuard, HttpWrapperService, UploadService,
    {provide: HTTP_INTERCEPTORS , useClass: HttpAuthenticationInterceptor, multi: true}
  ]
})
export class AdminModule { }
