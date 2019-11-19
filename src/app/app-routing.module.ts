import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [ 
  { path: '', component: LoginComponent},
  
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
