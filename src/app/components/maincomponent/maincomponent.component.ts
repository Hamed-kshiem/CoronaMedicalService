import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.scss'],
})
export class MaincomponentComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.auth.doLogout();
  }
}
