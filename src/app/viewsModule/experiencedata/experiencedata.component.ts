import { Component, OnInit } from '@angular/core';
import { ExpDataService } from './expData.service';
import { FetchingDataService } from '../view-services/fetching-data.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'experience-data',
    templateUrl: './experiencedata.component.html',
    styleUrls: ['./experiencedata.component.styl'],
    providers: [ExpDataService]
})
export class ExperiencedataComponent implements OnInit {
    URL = environment.serverURL + '/';
    Loaded: boolean = false;
    currentIndex: number = 0;
    maxCount: number;
    contentClassName: string = "";
    slideClassName: string = "";
    ExperienceData = [];

    // constructor(private expDataService: ExpDataService) { }
    constructor(
        private dataFetchingService: FetchingDataService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.Loaded = false;
        // setTimeout(() => {
        //     this.ExperienceData = this.expDataService.getExperienceData();
        //     this.maxCount = this.ExperienceData.length - 1;
        //     this.Loaded = true;
        // }, 3000);
        this.dataFetchingService.getExperience().then((data)=>{
            this.ExperienceData = data
            this.maxCount = this.ExperienceData.length - 1;
            this.Loaded = true;
        }).catch(()=>{
            this.alertService.error("Error fetching data")
        })
    }

    onNext() {
        // this.contentClassName = "slideInDown";
        this.slideClassName = "flipInX";
        this.currentIndex++;
        if (this.currentIndex == this.maxCount + 1) {
            this.currentIndex = 0;
        }

        setTimeout(() => {
            this.slideClassName = "";
        }, 1000);
    }

    onPrev() {
        // this.contentClassName = "slideInUp";
        this.slideClassName = "flipInY";
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.maxCount;
        }

        setTimeout(() => {
            this.slideClassName = "";
        }, 1000);
    }

}