import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { CoursesComponent } from './courses/courses.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { ProjectComponent } from './project/project.component';
import { CareerComponent } from './career/career.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

import { ScholarshipPageComponent } from './scholarship-page/scholarship-page.component';

import { SteamComponent } from './steam/steam.component';
import { ServivePageDetailedComponent } from './servive-page-detailed/servive-page-detailed.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path : '',component :HeaderComponent},
  { path: 'career', component: CareerComponent },
  { path: 'aboutus', component : AboutUsComponent},
  { path: 'job-description/:id', component: JobDescriptionComponent},
  { path: 'application-form', component: ApplicationFormComponent},
  { path: 'project', component: ProjectComponent},
  { path: 'contact', component: FormComponent},
  
  // {path: '', component: OverviewInfoServiceComponent},
  // {path: 'detailed-info-service', component: DetailedInfoServiceComponent},
  { path : 'servicepagedetails',component:ServivePageDetailedComponent },
  {path: 'courses', component: CoursesComponent},
  {path: 'applycourse', component: ApplycourseComponent},
  { path: 'scholarship', component: ScholarshipPageComponent},
  { path: 'steam', component: SteamComponent},
  {path: 'applycourse', component: ApplycourseComponent}

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

