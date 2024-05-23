import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScholarshipPageComponent } from './scholarship-page/scholarship-page.component'
import { ApplycourseComponent } from './applycourse/applycourse.component'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { WhatsappComponent } from './whatsapp/whatsapp.component';
import { SteamComponent } from './steam/steam.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectComponent } from './project/project.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CareerComponent } from './career/career.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { CoursesComponent } from './courses/courses.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormComponent } from './form/form.component';
import { ServivePageOverviewComponent } from './servive-page-overview/servive-page-overview.component';
import { ServivePageDetailedComponent } from './servive-page-detailed/servive-page-detailed.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScholarshipPageComponent,
    ServivePageDetailedComponent,
    CoursesComponent,
    ApplycourseComponent,
    WhatsappComponent,
    SteamComponent,
    ProjectComponent,
    ApplicationFormComponent,
    CareerComponent,
    JobDescriptionComponent,
    CoursesComponent,
    AboutUsComponent,
    MainHeaderComponent,

    CarouselComponent,

    FormComponent,
    CarouselComponent,
   
    FormComponent,

    FormComponent,
    CarouselComponent,
    ServivePageOverviewComponent,
    ChatbotComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





