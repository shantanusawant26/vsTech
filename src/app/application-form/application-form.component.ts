import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent {
  private apiUrl = 'http://localhost:3000/store-data'; 
  applicationForm: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.applicationForm = this.fb.group({
      position: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      alternateContactNumber: [''],
      dob: ['', Validators.required],
      linkedin: [''],
      currentCompany: ['', Validators.required],
      totalExperience: ['', Validators.required],
      relevantExperience: ['', Validators.required],
      currentCTC: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      expectedCTC: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      noticePeriod: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      resume: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.applicationForm.valid) {
      const formData = this.applicationForm.value;
      console.log(formData);

      // Show success toast
      this.snackBar.open('Form successfully submitted!', 'Close', {
        duration: 3000,
      });

      // Clear the form
      this.applicationForm.reset();
      this.submitted = false;
    } else {
      console.log('Form is invalid');
    }
  }


}
