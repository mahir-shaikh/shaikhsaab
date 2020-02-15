import { Injectable } from '@angular/core';

import Experience from '../../../assets/data/Experience.json'

@Injectable()
export class ExpDataService {

constructor() { }

getExperienceData() {
    return Experience;
}

}