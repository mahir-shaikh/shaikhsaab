import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ViewModule } from './viewsModule/views.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { HttpWrapperService } from './admin/services/http-wrapper.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    ViewModule,
    AdminModule,
    SharedModule
  ],
  providers: [HttpWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
