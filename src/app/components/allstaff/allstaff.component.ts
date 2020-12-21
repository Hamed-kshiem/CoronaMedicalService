import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Staff } from 'src/app/Staff';
import { StaffService } from '../../staff.service';

@Component({
  selector: 'app-allstaff',
  templateUrl: './allstaff.component.html',
  styleUrls: ['./allstaff.component.scss'],
})
export class AllstaffComponent implements OnInit {
  title = 'CoronaMedicalService';
  allStaff: Staff[] = [];

  constructor(private staff: StaffService, private router: Router) {}
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
    // this.router.navigate(['deletestaff', id]);
  }
  editStaff(id): any {
    // this.router.navigate(['editstaff', id]);
  }
}
