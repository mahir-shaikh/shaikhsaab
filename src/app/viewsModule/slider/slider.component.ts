import { SliderDataService } from './sliderData.service';
import {Input, Component,   OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  providers : [SliderDataService]
})
export class SliderComponent implements OnInit {
  @Input() activeNumber : number;
  slideIndex : number = 1;
  JsonArrayData = {};
  currentTitle : string = "";
  currentImage : string = "";
  currentDescription : string = "";
  currentScenario : string = "";
  currentIndex : number = 0;
  isImageArray : boolean = false;
  ImageArray = [];
  ImageIndex : number = 0;

  constructor(private sliderDataService : SliderDataService) {
   }

  ngOnInit() {
    this.CopyJsonData(this.sliderDataService.getSliderData())
    
  }

  CopyJsonData(JsonData){
    this.JsonArrayData = JsonData;
    this.showSlideData();
  }

 NextSlide() {
  if(this.currentIndex == this.JsonArrayData[this.currentScenario].length -1)
  {
    this.currentIndex = 0;
  }
  else
  {
    this.currentIndex++;
  }
  this.showSlideData();
}

PreviousSlide(){
  if(this.currentIndex > 0)
  {
    this.currentIndex--;
  }
  else
  {
    this.currentIndex = this.JsonArrayData[this.currentScenario].length -1;
  }
  this.showSlideData();
}

NextImage() {
  if(this.ImageIndex == this.JsonArrayData[this.currentScenario][this.currentIndex].name.length -1)
  {
    this.ImageIndex = 0;
  }
  else
  {
    this.ImageIndex++;
  }
}

PreviousImage(){
  if(this.ImageIndex > 0)
  {
    this.ImageIndex--;
  }
  else
  {
    this.ImageIndex = this.JsonArrayData[this.currentScenario][this.currentIndex].name.length -1;
  }
}

showSlideData(){
   this.currentScenario = this.getScenario();
   let currentObject = this.JsonArrayData[this.currentScenario][this.currentIndex];
   this.currentTitle = currentObject.title;
   this.currentDescription = currentObject.description;
   this.currentImage = currentObject.name[0];
   this.ImageArray = currentObject.name;
   if(currentObject.name.length > 1)
   {
     this.isImageArray = true;
   }else{
     this.isImageArray = false;
   }
}

getScenario() : string {
  let scenario : string ="";
  switch(this.activeNumber){
    case 0 : 
      scenario = "logo";
      break;
    case 1 :
      scenario = "poster";
      break;
    case 2 :
      scenario = "unlabled";
      break;
    default:
      scenario = "logo";
  }
  return scenario;
}

}