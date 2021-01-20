import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor() {}

  getTheme(): string {
    return localStorage.getItem('theme');
  }

  setTheme(theme: string): void {
    localStorage.setItem('theme', theme);
  }
}
