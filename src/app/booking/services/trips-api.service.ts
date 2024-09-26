import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ReserveEntity} from "../model/reserve.entity";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripsService {
  [x: string]: any;

  private apiUrl = 'http://localhost:3001/';

  constructor(private http: HttpClient) {}


  getReservations(): Observable<ReserveEntity[]> {
    return this.http.get<ReserveEntity[]>(this.apiUrl);
  }
}
