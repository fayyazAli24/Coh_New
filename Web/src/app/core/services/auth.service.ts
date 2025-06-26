import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

interface Facility {
  employeeId: number;
  facilityId: number;
  companyId: number;
  companyName: string;
  facilityName: string;
}

interface LoginResponse {
  token: string;
  userId: number;
  userName: string;
  empId: number;
  success: boolean;
  allowscreens: string[];
  facilities: Facility[];
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'access_token';
  private readonly baseUrl = environment.apiUrl;



  constructor(private http: HttpClient) {}

   login(username: string, password: string): Observable<void> {
     debugger
     const headers = new HttpHeaders({
  'Content-Type': 'application/json-patch+json'
});
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/AuthenticateToken/Login`, { name: username,
  password: password },
 { headers })
      .pipe(
        tap((res) => {
          localStorage.setItem(this.tokenKey, res.token);
          sessionStorage.setItem('userName', res.userName);
          sessionStorage.setItem('userId', res.userId.toString());
          sessionStorage.setItem('empId', res.empId.toString());
          sessionStorage.setItem('facilities', JSON.stringify(res.facilities));
          sessionStorage.setItem('allowscreens', JSON.stringify(res.allowscreens));
        }),
        map(() => void 0)
      );
  }


  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.http.post(`${this.baseUrl}/AuthenticateToken/Logout`, {}).subscribe(); 
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
