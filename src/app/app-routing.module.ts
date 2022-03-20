import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutmeComponent} from "./pages/aboutme/aboutme.component";
import {ResumeComponent} from "./pages/resume/resume.component";

const routes: Routes = [
  {
    path:'',
    component:AboutmeComponent,
    pathMatch:'full'
  },
  {
    path:'resume',
    component:ResumeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
