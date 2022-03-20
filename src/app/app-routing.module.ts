import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutmeComponent} from "./pages/aboutme/aboutme.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {PortfolioComponent} from "./component/portfolio/portfolio.component";
import {BlogComponent} from "./component/blog/blog.component";
import {ContactComponent} from "./component/contact/contact.component";

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
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
