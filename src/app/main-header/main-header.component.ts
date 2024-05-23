import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {


constructor(private router: Router) {}




scrollToSection(section: string) {
console.log(section)
    this.router.navigate([''], { fragment: section });
    console.log("hellow")
}
}
