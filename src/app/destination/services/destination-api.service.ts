import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DestinationApiService {
  API_URL:string = 'https://my-json-server.typicode.com/ericx2024/UniRiderDB/db';
  constructor(private httpClient:HttpClient) { }

  getService(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res);
  }
}
