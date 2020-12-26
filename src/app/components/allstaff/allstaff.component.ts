import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/Staff';
import { StaffService } from '../../staff.service';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-allstaff',
  templateUrl: './allstaff.component.html',
  styleUrls: ['./allstaff.component.scss'],
})
export class AllstaffComponent implements OnInit {
  title = 'CoronaMedicalService';
  allStaff: Staff[] = [];
  Stafftodelete: number;
  //editStaffObjId: number;
  editStaffObj: Staff = {
    name: 'name',
    birthday: new Date(),
    street: 'Altenbergerstrasse 69',
    postcode: 4040,
    location: 'Linz',
    coronaPositiv: false,
    hiringDate: new Date(),
    type: [],
    education: [],
  };
  addStaffObj: Staff = {
    name: 'Musterman',
    birthday: new Date(),
    street: 'Altenbergerstrasse 69',
    postcode: 4040,
    location: 'Linz',
    coronaPositiv: false,
    hiringDate: new Date(),
    type: [],
    education: [],
  };

  constructor(
    private staff: StaffService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.staff.getAllStaff().subscribe((res) => {
      this.allStaff = res;
      console.log(res);
    });
  }
  viewStaff(id): any {
    this.router.navigate(['viewstaff', id]);
  }
  deleteStaff(id): any {
    this.staff.deleteStaffByID(id).subscribe((res) => {
      this.allStaff = res;
      console.log(res);
    });
  }
  editStaff(id): any {
    this.staff.getStaffById(id).subscribe((res) => {
      this.editStaffObj = res;
      console.log(res);
    });
  }
  editStaffrequest(): any {
    this.staff
      .editStaff(this.editStaffObj.id, this.editStaffObj)
      .subscribe((res) => {
        console.log(this.editStaffObj);
      });
  }

  addStaff() {
    this.staff.addStaff(this.addStaffObj).subscribe((res) => {
      console.log(this.addStaffObj);
      console.log(res);
      this.addStaffObj = {
        name: '',
        birthday: new Date(),
        street: 'Altenbergerstrasse 69',
        postcode: 4040,
        location: 'Linz',
        coronaPositiv: false,
        hiringDate: new Date(),
        type: [],
        education: [],
      };
    });
    location.reload();
  }
}
