import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class FlightSearchService {
  private API_URL: string = environment.APIEndpoint;

  constructor(private http: HttpClient) {}

  searchFlight(data: any) {
    return this.http.post<any>(this.API_URL, data);
  }
}
