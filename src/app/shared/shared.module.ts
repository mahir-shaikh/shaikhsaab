import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import { ToggleComponent } from './toggle/toggle.component';
import { CommunicatorService } from './services/communicator.service';

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
  providers: [AlertService, CommunicatorService]
})
export class SharedModule { }
