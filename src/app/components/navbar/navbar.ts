import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  activeSection = signal('home');

  menuOpen = false;

  sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

  constructor(public theme: ThemeService) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onScroll() {
    const scrollPosition = window.scrollY + 120;

    for (const section of this.sections) {
      const element = document.getElementById(section);

      if (!element) continue;

      const top = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        this.activeSection.set(section);
      }
    }
  }
}
