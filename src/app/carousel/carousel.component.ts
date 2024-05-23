import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    '../../assets/img/Kids.jpg',
    '../../assets/img/Scho2.jpg',
    '../../assets/img/STEAM.jpg',
    '../../assets/img/Summ4.jpg',
    '../../assets/img/Summ5.jpg'
  ];

  currentIndex = 0;

  previousImg() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextImg() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
