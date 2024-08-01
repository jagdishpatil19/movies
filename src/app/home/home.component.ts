import { Component, Input } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private apiCall:ApicallService){}

  api:any;
  apiData:any
 
  searchValue:any
   ngOnInit(){
  this.apiCall.getApiCAll().subscribe(res=>{
    this.api=res
    this.apiData=this.api.data
    console.log(this.apiData)
    this.searchValue=''
  })
  }

 
  casts(index:any){
     this.apiCall.casts=index.casts
     
   
  }
  getChildData(value:any) {
 this.searchValue=value
  }
  
}
