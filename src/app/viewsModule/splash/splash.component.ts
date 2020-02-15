import {UrlTree, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  bCookieExists : boolean = false;
  progressMessage : string = "Loading..."
  progress : number = 1;

  constructor(private router : Router) { }

  ngOnInit() {
    this.bCookieExists = CheckIfCookieExists();

    if(this.bCookieExists){
      this.NavigateToDashboard();
    }
    else{
       CreateCookie();
      this.ShowFalseProgress();
    }
  }

  NavigateToDashboard(){
    let url = "/dashboard";
    let UrlTree : UrlTree = this.router.parseUrl(decodeURIComponent(url));
    this.router.navigateByUrl(UrlTree);
  }

  ShowFalseProgress(){
    if(this.progress == 100){
      this.NavigateToDashboard();
      return;
    }

    this.progress++;
    setTimeout(()=>{
      this.ShowFalseProgress() 
    }, 5000);
  }

  

}

function CreateCookie(){
  let oDate : Date = new Date();
  localStorage.setItem("Date", oDate.toDateString());
}


function CheckIfCookieExists() : boolean{
  let CurrentDate : string = new Date().toDateString();
  let CookieDate : string;

  CookieDate = localStorage.getItem("Date"); 

  if(!true){
    return true;
  }
  else{
    return false;
  }
}

