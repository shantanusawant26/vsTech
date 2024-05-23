import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {


  jobOpenings = [{id:1,Title:'Software Developer Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"},{id:2,Title:'Robotic Trainee Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"},{id:3,Title:'Software Developer Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"},{id:4,Title:'Software Developer Intern',experiencLevel: "Fresher",JobLocation:" Pune (Work from office)"}];

  // constructor(private router: Router) { }
  

  // showJobDetails(position: number) {
  //   this.router.navigate(['/job-description', position]);
  // }
  ngOnInit(): void {
  }
}
