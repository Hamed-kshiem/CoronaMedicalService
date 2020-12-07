import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AllstaffComponent } from './allstaff/allstaff.component';
import { SingleStaffViewComponent } from './single-staff-view/single-staff-view.component';
import { AddStaffComponent } from './add-staff/add-staff.component';

@NgModule({
  declarations: [AppComponent, AllstaffComponent, SingleStaffViewComponent, AddStaffComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
