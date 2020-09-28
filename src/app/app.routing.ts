import { SmallScreenComponent } from './viewsModule/smallScreen/smallScreen.component';
import { DevelopementComponent } from './viewsModule/developement/developement.component';
import { ResumeComponent } from './viewsModule/resume/resume.component';
import { DesigningComponent } from './viewsModule/designing/designing.component';
import { ContactComponent } from './viewsModule/contact/contact.component';
import { ExperienceComponent } from './viewsModule/experience/experience.component';
import { AboutComponent } from './viewsModule/about/about.component';
import { PageNotFoundComponent } from './viewsModule/pageNotFound/pageNotFound.component';
import { DashboardComponent } from './viewsModule/dashboard/dashboard.component';
import { SplashComponent } from './viewsModule/splash/splash.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { AllPostComponent } from './admin/all-post/all-post.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { AuthGuard } from './admin/guards/auth.guard';
import { CommentManagementComponent } from './admin/comment-management/comment-management.component';
import { NewUploadComponent } from './admin/uploads/new-upload/new-upload.component';
import { UploadsComponent } from './admin/uploads/uploads.component';
// import { messagesDashRouting } from '../messagesdash/messages-dashboard-routing';

const appRoutes: Routes = [
    {
        path : "splash",
        component : SplashComponent
    },
    {
        path : "dashboard",
        component : DashboardComponent,
        children : [
            {
                path : "about",
                component : AboutComponent
            },
            {
                path : "experience",
                component : ExperienceComponent
            },
            {
                path : "contact",
                component : ContactComponent
            },
            {
                path : "designs",
                component : DesigningComponent
            },
            {
                path : "resume",
                component : ResumeComponent
            },
            {
                path : "development",
                component : DevelopementComponent
            },
            {
                path : "social",
                component : SmallScreenComponent
            }
        ]
    },
    {
        path : "dashboard",
        component : DashboardComponent,
    },
    {
        path : "admin",
        component : AdminComponent,
        canActivate: [AuthGuard],
        children:[
            {
                path: 'newpost',
                component: NewPostComponent
            },
            {
                path: 'allposts',
                component: AllPostComponent
            },
            {
                path: 'editpost/:id',
                component: EditPostComponent
            },
            {
                path: 'comments/:id',
                component: CommentManagementComponent
            },
            {
                path: 'uploads',
                component: UploadsComponent
            }
        ]
    },
    {
        path : "login",
        component : LoginComponent,
    },
    {
        path : "",
        redirectTo : "/dashboard",
        pathMatch : "full"
    },
    {
        path : "**",
       component : PageNotFoundComponent
    },
]

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});