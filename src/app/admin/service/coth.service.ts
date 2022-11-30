import { getLocaleExtraDayPeriodRules } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CothService {
  private baseUrl = environment.apiUrl + '/cloth';

  constructor(private http: HttpClient) { }

  ClothSave(data: any) {

    return this.http.post(`${this.baseUrl}`, data)
  }

  getAllCloth() {
    return this.http.get(`${this.baseUrl}`)
  }

  getSingleCloth(id: any) {
    const params = new HttpParams().set('_id', id)
    return this.http.get(`${this.baseUrl}/getSingleCloth`, { params })

  }
  updateCloth(data: any) {
    return this.http.put(`${this.baseUrl}`, data)
  }
  deleteCloth(id: any) {
    const params = new HttpParams().set('_id', id)
    return this.http.delete(`${this.baseUrl}/deleteCloth`, { params })
  }
}
