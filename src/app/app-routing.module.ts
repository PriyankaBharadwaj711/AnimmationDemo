import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsentFormComponent} from './consent-form/consent-form.component'
import { DemographicFormComponent } from './demographic-form/demographic-form.component';
import { IntroComponent } from './intro/intro.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EndPageComponent } from './end-page/end-page.component';
const routes: Routes = [
  {
    path:"home",
    component:ConsentFormComponent,
  },
  {
    path:"demo",
    component:DemographicFormComponent,
  },
  {
    path:"intro",
    component:IntroComponent,
  },
  {
    path:"video",
    component:VideosComponent,
  },
  {
    path:"login",
    component:LoginComponent
    
  },
  {
    path:"adminDash",
    component:AdminDashComponent
  },
  {
   path:"end" ,
   component:EndPageComponent
  },
  
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
