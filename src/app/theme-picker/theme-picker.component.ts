import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {
  @Input() selectedTheme: string = 'Tema 1';

  constructor() {}

  ngOnInit(): void {}

  selectTheme = (theme: string): void => {
    this.selectedTheme = theme;
  };
}
