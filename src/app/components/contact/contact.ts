import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class Contact {
  contactForm!: FormGroup;
  isSending = false;
  showSuccess = false;
  showError = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit(): void {
    if (this.contactForm.invalid || this.isSending) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;
    this.showSuccess = false;
    this.showError = false;

    this.http
      .post('https://email-sender-n6dj.onrender.com/api/contact', this.contactForm.value, { responseType: 'text' })
      .subscribe({
        next: (response) => {
          console.log(response);

          this.isSending = false;
          this.showSuccess = true;

          this.contactForm.reset();

          // Hide notification after 4 seconds
          setTimeout(() => {
            this.showSuccess = false;
          }, 4000);
        },

        error: (error) => {
          console.error(error);

          this.isSending = false;
          this.showError = true;

          setTimeout(() => {
            this.showError = false;
          }, 4000);
        },
      });
  }
}
