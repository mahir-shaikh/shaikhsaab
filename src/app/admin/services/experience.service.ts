import { Injectable } from '@angular/core';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpWrapperService) { }

  getExperience(){
    return this.http.getJson("/getExperience", null);
  }

  setExperience(data){
    return this.http.postJson("/postExperience", data);
  }

}
