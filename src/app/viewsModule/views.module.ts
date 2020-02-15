import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
//To maintain proper moduler structure declare and export all component in this module and import this module in root module

import { NgModule } from '@angular/core';
import { SplashComponent } from './splash/splash.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { DesigningComponent } from './designing/designing.component';
import { ResumeComponent } from './resume/resume.component';
import { DevelopementComponent } from './developement/developement.component';
import { SliderComponent } from './slider/slider.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { SmallScreenComponent } from './smallScreen/smallScreen.component';
import { ExperiencedataComponent } from './experiencedata/experiencedata.component';
import { AboutdataComponent } from './aboutdata/aboutdata.component';

@NgModule({
    imports: [RouterModule, CommonModule, FormsModule],
    exports: [
        SplashComponent,
        DashboardComponent,
         AboutComponent,
        PageNotFoundComponent,
        ExperienceComponent,
        ContactComponent,
        DesigningComponent,
        ResumeComponent,
        DevelopementComponent,
        EmailComponent,
        SocialComponent,
        ExperiencedataComponent,
        AboutdataComponent
    ],

    declarations: [
        SplashComponent,
        DashboardComponent,
        AboutComponent,
        PageNotFoundComponent,
        ExperienceComponent,
        ContactComponent,
        DesigningComponent,
        ResumeComponent,
        DevelopementComponent,
        SliderComponent,
        EmailComponent,
        SocialComponent,
        SmallScreenComponent,
        ExperiencedataComponent,
        AboutdataComponent
],
    providers: [],
})
export class ViewModule { }
