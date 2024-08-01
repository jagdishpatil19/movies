import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CastsComponent } from './casts/casts.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'casts',component:CastsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
