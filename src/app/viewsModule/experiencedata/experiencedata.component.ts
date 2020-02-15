import { Component, OnInit } from '@angular/core';
import { ExpDataService } from './expData.service';

@Component({
    selector: 'experience-data',
    templateUrl: './experiencedata.component.html',
    styleUrls: ['./experiencedata.component.styl'],
    providers: [ExpDataService]
})
export class ExperiencedataComponent implements OnInit {
    private Loaded: boolean = false;
    private currentIndex: number = 0;
    private maxCount: number;
    private contentClassName: string = "";
    private slideClassName: string = "";
    ExperienceData = [];

    constructor(private expDataService: ExpDataService) { }

    ngOnInit() {
        this.Loaded = false;
        setTimeout(() => {
            this.ExperienceData = this.expDataService.getExperienceData();
            this.maxCount = this.ExperienceData.length - 1;
            this.Loaded = true;
        }, 3000);
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