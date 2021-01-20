import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ServiceTableService } from '../services/service-table.service';
import { Theme } from '../theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {

  @Input() themes: Theme[] = [];
  @Input() selectedTheme: Theme = {
    className: 'custom-table',
    displayName: 'Tema 1'
  };
  @Output() refreshTheme: EventEmitter<any> = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  selectTheme = (theme: Theme): void => {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
    this.refreshTheme.emit(null);
  };
}
