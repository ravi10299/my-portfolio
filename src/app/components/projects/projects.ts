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

      tech: ['Angular', 'Java', 'Spring Boot', 'MySQL'],

      github: 'https://github.com/ravi10299',

      demo: 'https://buy-nest-orcin.vercel.app/home',
    },

    {
      title: 'TextUtils Website',

      image: 'textUtils.png',

      description:
        'TextUtils is a responsive web application built with React.js that helps users perform various text manipulation tasks quickly and efficiently. The application provides real-time text analysis and formatting features through a clean and user-friendly interface.',

      tech: ['React.js', 'javaScript', 'tailwind css'],

      github: 'https://github.com/ravi10299/textutils-text-app',

      demo: 'https://ravi10299.github.io/textutils-text-app/',
    },

    {
      title: 'Movies Explorer',

      image: 'movieExplore.png',

      description:
        'Movies Explorer is a modern and responsive movie discovery web application that allows users to explore trending movies, search for their favorite titles, and view detailed movie information in real time. The application integrates with the TMDB (The Movie Database) API to provide up-to-date movie data, including posters, ratings, release dates, and overviews',

      tech: ['React.js', 'Bootstrap', 'JavaScript'],

      github: 'https://github.com/ravi10299/Movies-Explorers-/',

      demo: 'https://ravi10299.github.io/Movies-Explorers-/',
    },
    {
      title: 'Rock Paper Scissors Game',

      image: 'rack.png',

      description:
        'a modern Rock Paper Scissors Game web application. Display a sleek gaming interface on a floating laptop with a dark neon UI and glowing blue-purple accents. Show three large 3D icons (Rock ✊, Paper ✋, Scissors ✌️), an animated score board (Player vs Computer), You Win! popup, and colorful game buttons. Add a smartphone mockup beside the laptop to emphasize responsive design.',

      tech: ['React.js', 'Bootstrap', 'JavaScript'],

      github: 'https://github.com/ravi10299/rack-paper-scissors-game/',

      demo: 'https://ravi10299.github.io/rack-paper-scissors-game/',
    },
    {
      title: 'Real Time Chat Appliction',

      image: 'chat-application.png',

      description:
        'A modern real-time messaging application that enables users to communicate instantly through a clean and responsive interface. The application delivers seamless, low-latency communication using WebSocket technology, making conversations feel fast and interactive. It is designed with a user-friendly chat interface that works smoothly across desktop and mobile devices.',

      tech: ['java', 'SpringMVC', 'CSS'],

      github: 'https://github.com/ravi10299/Real-Time-Chat-Application',

      demo: 'https://ravi10299.github.io/Real-Time-Chat-Application/',
    },
  ];
}
