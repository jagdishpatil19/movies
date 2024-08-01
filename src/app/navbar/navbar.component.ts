import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private apiCall:ApicallService){}
  @Output() childData=new EventEmitter<any>

 ngOnInit(){
 
 }
  searchData:any;
  searchBtn(data:any){
    this.searchData=data
    this.childData.emit(this.searchData)
  }
}
