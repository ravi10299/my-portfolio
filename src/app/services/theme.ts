import { Injectable, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  isDark = signal(true);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme) {
        this.isDark.set(savedTheme === 'dark');
      }

      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDark.update((v) => !v);

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');

      this.applyTheme();
    }
  }

  private applyTheme() {
    if (!isPlatformBrowser(this.platformId)) return;

    document.body.classList.toggle('light-theme', !this.isDark());
  }
}
