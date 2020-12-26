import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AllstaffComponent } from './components/allstaff/allstaff.component';
import { SingleStaffViewComponent } from './components/single-staff-view/single-staff-view.component';
import { DeleteStaffComponent } from './components/delete-staff/delete-staff.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { LoginComponent } from './components/login/login.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/authconfig.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AllstaffComponent,
    SingleStaffViewComponent,
    AllstaffComponent,
    DeleteStaffComponent,
    MaincomponentComponent,
    LoginComponent,
    NotFound404Component,
    EditStaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
