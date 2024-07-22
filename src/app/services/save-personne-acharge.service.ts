// assure.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavePersonneAchargeService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  createAssure(formData: any): Observable<any> {
    console.log('formDataformData', formData);

    return this.http.post<any>(`${this.apiUrl}/assure`, formData);
  }
}
