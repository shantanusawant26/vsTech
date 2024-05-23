import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}




  scrollToSection(section: string) {
  console.log(section)
      this.router.navigate([''], { fragment: section });
      console.log("hellow")
  }


}
