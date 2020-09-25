import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  showErrorMsg = false;
  ErrorMsg = ''

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password)
        .subscribe((res: any) => {
          if (res.success) {
            this.router.navigateByUrl('/admin');
          } else {
            this.ErrorMsg = res.message
            this.showErrorMsg = true;
          }
        });
    }

  }

}
