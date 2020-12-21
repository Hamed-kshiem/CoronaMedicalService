import { NotFound404Component } from './components/not-found404/not-found404.component';
import { AllstaffComponent } from './components/allstaff/allstaff.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleStaffViewComponent } from './components/single-staff-view/single-staff-view.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { DeleteStaffComponent } from './components/delete-staff/delete-staff.component';
import { EditStaffComponent } from './components/edit-staff/edit-staff.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',

    component: MaincomponentComponent,
    children: [
      { path: '', component: AllstaffComponent },
      { path: 'editstaff/:id', component: EditStaffComponent },
      { path: 'viewstaff/:id', component: SingleStaffViewComponent },
      { path: 'deletestaff/:id', component: DeleteStaffComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFound404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
