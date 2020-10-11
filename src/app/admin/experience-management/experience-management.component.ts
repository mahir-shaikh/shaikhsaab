import { Component, OnInit } from '@angular/core';
import { EXPERIENCE } from 'src/app/interfaces/experience.interface';
import { environment } from 'src/environments/environment';
import { ExperienceService } from '../services/experience.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-experience-management',
  templateUrl: './experience-management.component.html',
  styleUrls: ['./experience-management.component.styl']
})
export class ExperienceManagementComponent implements OnInit {
  URL = environment.serverURL + "/";

  serverJSON: Array<EXPERIENCE>
  localJSON: Array<EXPERIENCE>

  activeIndex: number = -1;
  activeSection: number = -1;
  // editableJsonString:any;
  editableJson: EXPERIENCE;
  invalidJson: boolean = false;
  objectKeys = Object.keys;

  constructor(
    private experienceService: ExperienceService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.experienceService.getExperience().then((data) => {
      this.serverJSON = data;
      this.localJSON = this.copyArray(this.serverJSON)//this.serverJSON.slice(); // add slice to create a copy
    }).catch((err) => {
      this.alertService.error(err)
    })
  }

  updateJson(json) {
    this.localJSON[this.activeIndex] = json;
  }

  addRow() {
    let obj: EXPERIENCE = {
      id: "",
      name: "",
      role: "",
      description: "",
      websiteUrl: "",
      bg_img: "",
      demo_links: []
    }

    this.localJSON.push(obj);
  }

  deleteRow(index) {
    this.localJSON.splice(index, 1);
  }

  setActiveIndex(index) {
    this.activeIndex = index;
    // this.editableJsonString = JSON.stringify(this.localJSON[this.activeIndex], null, "\t");
    let newArr = this.copyArray(this.localJSON)
    this.editableJson = newArr[this.activeIndex];
  }

  saveData() {
    try {
      // let obj = JSON.parse(this.editableJsonString);
      this.localJSON[this.activeIndex] = this.editableJson;
      // this.invalidJson = false;
      this.activeIndex = -1;
      this.activeSection = -1;


      // localStorage.setItem('sampleJson', JSON.stringify(this.sampleJson));
    }
    catch (e) {
      this.invalidJson = true;
      console.log('error occored while you were typing the JSON');
    };
  }

  addNewDemoLink() {
    this.editableJson.demo_links.push("www.demo.com")
  }

  deleteDemoLink(i) {
    this.editableJson.demo_links.splice(i, 1)
  }

  syncData() {
    this.experienceService.setExperience(this.localJSON).then((response) => {
      if (response.success) {
        this.alertService.success(response.message)
        this.serverJSON = this.copyArray(this.localJSON)//this.localJSON.slice(); // add slice to create a copy instead of copying as a reference
      }
    }).catch((err) => {
      this.alertService.error(err)
    })
  }

  changesDetected() {
    return JSON.stringify(this.serverJSON) != JSON.stringify(this.localJSON);
  }

  updateImage(filePath) {
    this.editableJson.bg_img = filePath;
    console.log(this.localJSON)
    console.log(this.serverJSON)
  }

  copyArray(oldArray) {
    var newArray = []; // create empty array to hold copy

    for (var i = 0, len = oldArray.length; i < len; i++) {
      newArray[i] = {}; // empty object to hold properties added below
      for (var prop in oldArray[i]) {
        newArray[i][prop] = oldArray[i][prop]; // copy properties from oldArray to newArray
      }
    }

    return newArray;
  }

}
