import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Staff } from './Staff';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  constructor(private http: HttpClient) {}

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(environment.API_URL + '/staff');
  }
  deleteStaffByID(id): Observable<any> {
    return this.http.delete<any>(environment.API_URL + `/staff/` + `${id}`);
  }
  getStaffById(id): Observable<Staff> {
    return this.http.get<Staff>(environment.API_URL + '/staff/' + `${id}`);
  }
  updateStaffbyID(id) {}
  addStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(environment.API_URL + '/staff', staff);
  }
  editStaff(id, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(
      environment.API_URL + '/staff/' + `${id}`,
      staff
    );
  }
}
