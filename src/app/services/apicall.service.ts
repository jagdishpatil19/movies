import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  casts: any;
  searchData: any;

  constructor(private httpClient:HttpClient) { }

  url='https://jsonfakery.com/movies/paginated'
  // url:any='https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=f55aae9c73d921df1d624da9dabe9373&units=metric'


  getApiCAll(){
    return this.httpClient.get(this.url)
  }
}
