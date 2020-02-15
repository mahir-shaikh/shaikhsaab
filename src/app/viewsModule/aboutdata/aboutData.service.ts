import { Injectable } from '@angular/core';

import About from '../../../assets/data/About.json'

@Injectable()
export class AboutDataService {

constructor() { }

getAboutData() {
    return About;
}

}