// import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit  {
//   constructor(private route: ActivatedRoute) {}
//   Images = [
//     '../../assets/img/About1.jpg',
//     '../../assets/img/About2.jpg',
//     '../../assets/img/About3.jpg',
//     '../../assets/img/About4.jpg',
//   ];

//   currentIndex = 0;

//   ngOnInit() {
//     this.route.fragment.subscribe((fragment: string | null) => {
//       if (fragment) {
//           this.scrollToSection(fragment);
//       }
//   });
//     setInterval(() => {
//       this.currentIndex = (this.currentIndex + 1) % this.Images.length;
//     }, 3000);
//   }
  
// // Courses
//   images = [
//     '../../assets/img/course2.avif',
//     '../../assets/img/Course3.avif',
//     '../../assets/img/Course1.avif',
//     '../../assets/img/Course4.avif',
    
//   ];

//   currIndex = 0;

//   previousImage() {
//     this.currIndex = (this.currIndex - 1 + this.images.length) % this.images.length;
//   }
//   nextImage() {
//     this.currIndex = (this.currIndex + 1) % this.images.length;
//   }

//   //services
//   currBoxIndex = 0;
//   totalBoxes = 18;

//   previousBox() {
//     this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
//   }

//   nextBox() {
//     this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
//   }

//   //feedback
//   @ViewChild('boxWrapper', { static: false }) boxWrapper!: ElementRef;
//   currFeed = 0;
//   totalFeed = 3;
//   items = new Array(this.totalFeed);  

//   previousFeed() {
//     this.currFeed = (this.currFeed - 1 + this.totalFeed) % this.totalFeed;
//     this.updateCarousel();
//   }

//   nextFeed() {
//     this.currFeed = (this.currFeed + 1) % this.totalFeed;
//     this.updateCarousel();
//   }

//   updateCarousel() {
//     const boxWidth = this.boxWrapper.nativeElement.querySelector('.boxx').offsetWidth + 20; // box width + margin-right
//     this.boxWrapper.nativeElement.scrollLeft = this.currFeed * boxWidth;
//   }


//     scrollToSection(section: string) {
//         const element = document.getElementById(section);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
//         }
//     }
  

// }


import { Component, OnInit, ViewChild, ElementRef, OnDestroy  } from '@angular/core';
 import { ActivatedRoute } from '@angular/router';
 import { Router, NavigationEnd } from '@angular/router';
 import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  constructor(private router: Router) {}

  Images = [
    '../../assets/img/four-kids-building-drone-using-electronic-parts.jpg',
    '../../assets/img/cartoon-dragon-character.jpg',
    '../../assets/img/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory-robot.jpg',
    '../../assets/img/top-view-woman-drawing-ipad.jpg',
  ];
// Images = [
//   '../../assets/boy-doing-experiments-laboratory.jpg',
//   '../../assets/smiling-boy-casual-holding-globe-hands-isolated-white (1).jpg',
//   '../../assets/kids-classroom-taking-english-class.jpg',
//   '../../assets/smiling-school-children-studying-science-indoors-happily-generated-by-ai.jpg',
//   '../../assets/kid-looking-world-map.jpg',
//   '../../assets/front-view-young-male-desk-trying-fix-little-construction-purple-wall.jpg',
//   '../../assets/caucasian-boy-studying-home-by-video-conference-homeschooling.jpg',
//     
//   ];

  currentIndex = 0;

  scrollLeft() {
    this.currentIndex = (this.currentIndex === 0) ? this.Images.length - 1 : this.currentIndex - 1;
}

scrollRight() {
    this.currentIndex = (this.currentIndex + 1) % this.Images.length;
}

ngOnInit() {

    setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.Images.length;
    }, 5000);
}


  
 
ngAfterViewInit() {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe(() => {
    const fragment = this.router.url.split('#')[1];
    if (fragment) {
      this.scrollToSection(fragment);
    }
  });
}

scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}


scrollToserviceSection(section: string) {
  console.log(section)
      this.router.navigate(['servicepagedetails'], { fragment: section });
  }

  


// Courses
  images = [
    '../../assets/img/course2.avif',
    '../../assets/img/Course3.avif',
    '../../assets/img/Course1.avif',
    '../../assets/img/Course4.avif',
    
  ];

  currIndex = 0;

  previousImage() {
    this.currIndex = (this.currIndex - 1 + this.images.length) % this.images.length;
  }
  nextImage() {
    this.currIndex = (this.currIndex + 1) % this.images.length;
  }

  //services
  currBoxIndex = 0;
  totalBoxes = 18;

  previousBox() {
    this.currBoxIndex = (this.currBoxIndex - 1 + this.totalBoxes) % this.totalBoxes;
  }

  nextBox() {
    this.currBoxIndex = (this.currBoxIndex + 1) % this.totalBoxes;
  }

  //feedback
  @ViewChild('boxWrapper', { static: false }) boxWrapper!: ElementRef;
  currFeed = 0;
  totalFeed = 3;
  items = new Array(this.totalFeed);  

  previousFeed() {
    this.currFeed = (this.currFeed - 1 + this.totalFeed) % this.totalFeed;
    this.updateCarousel();
  }

  nextFeed() {
    this.currFeed = (this.currFeed + 1) % this.totalFeed;
    this.updateCarousel();
  }

  updateCarousel() {
    const boxWidth = this.boxWrapper.nativeElement.querySelector('.boxx').offsetWidth + 20; // box width + margin-right
    this.boxWrapper.nativeElement.scrollLeft = this.currFeed * boxWidth;
  }

  showPopup = true;
  name = '';
  message = '';


  hidePopup() {
    this.showPopup = false;
  }
}

  
    //   scrollToSection(section: string) {
    //     console.log(section);
    //     const element = document.getElementById(section);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    //     }
    // }