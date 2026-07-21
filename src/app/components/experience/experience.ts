import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  timeline = [
    {
      year: '2024 - Present',
      title: 'Full Stack Java Developer',
      company: 'Hindsol Software Pvt. Ltd.',
      description: [
        'Developed enterprise REST APIs using Spring Boot',
        'Built responsive Angular applications',
        'Implemented JWT Authentication & Spring Security',
        'Worked with MySQL, Hibernate and JPA',
        'Collaborated using Git & GitHub',
      ],
    },
  ];
}
