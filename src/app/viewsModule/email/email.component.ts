import { EmailService } from './email.service';
import {OnDestroy, Component,  OnInit} from '@angular/core';


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers : [ EmailService]
})
export class EmailComponent implements OnInit,OnDestroy {
  private result : string = "";
  constructor(private emailService : EmailService) { }

  ngOnInit() {
  }

  public message = {name: '', email: '', message: ''};
 
    onSubmit() {
      this.emailService.postEmail(this.message).then(
        response => this.handleResponse(response),
        error => this.handleResponse(error)
      );
    }
 
    handleResponse(response){
       console.log(`msg is: {response.status}`);
      this.result = "Well.... to tell you the truth i didn't wanted to waste money buying email service so that once in a blue moon someone could send me an email. Why don't you just contact me directly using the links i have provided in the other section of contact me."
       
      if(response.status =='success'){
        this.message = {name: '', email: '', message: ''};
        this.result = 'Successfully Sent!!!';
      }
 
      if(response.status =='error'){
        // this.result = 'Some Error Occurred. Please try again!!!';
        this.result = "Well.... to tell you the truth i didn't wanted to waste money buying email service so that once in a blue moon someone could send me an email. Why don't you just contact me directly using the links i have provided in the other section of contact me."
      }
    }

    ngOnDestroy(){
      this.result = "";
    }

}