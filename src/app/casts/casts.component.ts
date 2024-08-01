import { Component } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-casts',
  templateUrl: './casts.component.html',
  styleUrls: ['./casts.component.css']
})
export class CastsComponent {

  constructor(private apiCall:ApicallService){}
  castsDataGet:any=[]  //this is data of casts ...select the images tyhen data get 
   
  ngOnInit(){
    this.castsDataGet=this.apiCall.casts
    console.log(this.castsDataGet

      ,'this data og casts')
  }

}
