import { Component, OnInit } from '@angular/core';
import { AboutDataService } from './aboutData.service';

@Component({
  selector: 'app-aboutdata',
  templateUrl: './aboutdata.component.html',
  styleUrls: ['./aboutdata.component.styl'],
  providers: [AboutDataService]
})
export class AboutdataComponent implements OnInit {
  private Loaded: boolean = false;
  AboutData = [];

  constructor(private aboutDataService: AboutDataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.AboutData = this.aboutDataService.getAboutData();
      this.Loaded = true;
    }, 3000);
  }

}