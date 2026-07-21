import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Thank you! Your message has been sent.');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
