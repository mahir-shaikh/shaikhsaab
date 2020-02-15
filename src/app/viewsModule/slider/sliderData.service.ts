// import {Http} from '@angular/http';
import DesignData from '../../../assets/data/Designs.json';
import { Injectable } from '@angular/core';

@Injectable()
export class SliderDataService {

constructor() { }

// getSliderData() {
//     return this.http.get('./assets/data/Designs.json').map(
//         result => {
//             let data = result.json();
//             return data;
//         });
// }
getSliderData() {
    return DesignData;
}

}