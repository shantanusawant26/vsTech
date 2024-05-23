import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  onButtonClick(buttonName: string) {
     console.log(`Button ${buttonName} clicked!`);

  

  }

  title = 'coursePage'; 
  course_list_value = 0;
  // btn_text = "11th to 12th";
  // obj:AppComponent = new AppComponent();
  
  
  // ButtonClick(){
  //   if (this.course_list_value==0) {
  //     this.course_list_value=0;
  //     // this.btn_text = "5th to 10th";
  //   }
  //   else{
  //     this.course_list_value=1;
  //     // this.btn_text = "11th to 12th";

  //   }
  // }
  ButtonClick0(){
    this.course_list_value = 0;
      // this.btn_text = "11th to 12th";
  }
  ButtonClick1(){
    this.course_list_value = 1;
  //       // this.btn_text = "5th to 10th";
  }

}
