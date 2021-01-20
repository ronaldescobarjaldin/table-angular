import { Injectable } from '@angular/core';
import { Theme } from './theme';

const THEMES = [
    {
      className: 'custom-table',
      displayName: 'Tema 1',
    },
    {
      className: 'theme2',
      displayName: 'Tema 2',
    },
  ];

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  themes: Theme[] = THEMES;

  constructor() {}

  getTheme(): Theme {
    const themeString = localStorage.getItem('theme');
    if (themeString) {
    return JSON.parse(themeString);
    } else {
      return THEMES[0];
    }
  }

  setTheme(theme: Theme): void {
    localStorage.setItem('theme', JSON.stringify(theme));
  }

  getAllThemes(): Theme[] {
    return this.themes;
  }
}
