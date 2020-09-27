import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertComponent,
    ToggleComponent
  ],
  exports: [
    AlertComponent,
    ToggleComponent
  ],
  providers: [AlertService]
})
export class SharedModule { }
