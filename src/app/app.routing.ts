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
        path : "",
        redirectTo : "/splash",
        pathMatch : "full"
    },
    {
        path : "**",
       component : PageNotFoundComponent
    },
]

export const routing = RouterModule.forRoot(appRoutes, { useHash: true});