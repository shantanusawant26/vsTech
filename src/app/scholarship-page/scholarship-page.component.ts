import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './scholarship-page.component.html',
  styleUrls: ['./scholarship-page.component.css']
})
export class ScholarshipPageComponent {         
 
  title = 'scholarshipPage'; 
  ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  scholarship_div_visibility_value = 0;
  // obj:AppComponent = new AppComponent();
  
  
  current_scholarship_div_visibility_fun(){
    this.scholarship_div_visibility_value=0;
  }

  upcoming_scholarship_div_visibility_fun(){
    this.scholarship_div_visibility_value=1;
  }

}


