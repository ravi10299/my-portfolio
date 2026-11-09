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
      year: 'Aug 2026 - Present',
      title: 'Senior Systems Engineer',
      company: 'Infosys Limited | Pune, India',
      description: [
        'Working as a Senior Systems Engineer at Infosys.',
        'Strengthening technical expertise in Java, Spring Boot and Angular.',
        'Practicing problem-solving and coding through technical assessments.',
        'Continuously enhancing full-stack development and software engineering skills.',
      ],
    },
    {
      year: 'Nov 2023 - Jul 2026',
      title: 'Java Full Stack Developer',
      company: 'Hindsol Software Pvt. Ltd. | Varanasi, India',
      description: [
        'Developed enterprise REST APIs using Spring Boot.',
        'Built responsive web applications using Angular.',
        'Implemented JWT Authentication and Spring Security.',
        'Worked with MySQL, Hibernate and JPA.',
        'Optimized database queries and improved application performance.',
        'Collaborated with team members using Git and GitHub.',
      ],
    },
  
  ];
}
