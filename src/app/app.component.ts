import { StaffService } from './staff.service';
import { Staff } from './Staff';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'CoronaMedicalService';
  allStaff: Staff[] = [];

  constructor(private staff: StaffService) {}
  ngOnInit(): void {
    this.staff.getAllStaff().subscribe((res) => {
      this.allStaff = res;
      console.log(res);
    });
  }
}
