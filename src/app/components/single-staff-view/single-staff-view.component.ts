import { Staff } from './../../Staff';
import { StaffService } from './../../staff.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-staff-view',
  templateUrl: './single-staff-view.component.html',
  styleUrls: ['./single-staff-view.component.scss'],
})
export class SingleStaffViewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private staff: StaffService) {}
  id: string;
  staffObj: Staff;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.getStaffByID(this.id);
  }
  getStaffByID(id) {
    this.staff.getStaffById(id).subscribe((res) => {
      this.staffObj = res;
      console.log(res);
    });
  }
}
