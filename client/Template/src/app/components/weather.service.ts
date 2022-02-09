import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Registration, Weather } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  getRegistrationJSON(search: string): Promise<Weather>{
    
    const url = '/api/weather/'+ search
    
    const headers = new HttpHeaders()
    .set('content-type','application/json')
    // .set('Access-Control-Allow-Origin','*');


    return lastValueFrom(
      this.http.get<Weather>(url,{headers})
    )

  }
}
