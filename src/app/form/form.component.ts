
import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {

  contactForm: FormGroup;

  ngOnInit(): void {
      
  }
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      sub: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert("Form submitted successfully!!!")
      console.log('Form Submitted!', this.contactForm.value);
    } else {
      console.log('Form not valid');
    }
  }



  
  }
  


  // @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  // map: google.maps.Map;
  // lat = 18.5204;
  // lng = 73.8567;

 

  // initMap() {
  //   const mapOptions: google.maps.MapOptions = {
  //     center: {lat: this.lat, lng: this.lng},
  //     zoom: 12,
  //   };
  //   this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
  //   const marker = new google.maps.Marker({
  //     position: {lat: this.lat, lng: this.lng},
  //     map: this.map,
  //     title: 'Our Location'
  //   });
  // }



