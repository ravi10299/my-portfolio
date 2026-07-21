import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Website',
      image: 'unnamed.jpg',
      description:
        'A Full Stack E-Commerce application with authentication, product management, cart, order management and payment support.',

      tech: ['Angular', 'Spring Boot', 'MySQL'],

      github: 'https://github.com/ravi10299',

      demo: '#',
    },

    {
      title: 'Instagram Image To PDF',

      image: 'unnamed.jpg',

      description:
        'Generate PDF from Instagram post URLs using Angular, Spring Boot and Playwright.',

      tech: ['Angular', 'Spring Boot', 'Playwright'],

      github: 'https://github.com/ravi10299',

      demo: '#',
    },

    {
      title: 'AI Chat Application',

      image: 'unnamed.jpg',

      description: 'AI Chat application using Spring AI, OpenAI API and Ollama models.',

      tech: ['Spring AI', 'Angular', 'OpenAI'],

      github: 'https://github.com/ravi10299',

      demo: '#',
    },
  ];
}
