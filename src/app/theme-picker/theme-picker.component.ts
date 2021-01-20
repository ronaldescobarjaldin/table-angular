import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ServiceTableService } from '../services/service-table.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {

  @Input() themes: string[] = [];
  @Input() selectedTheme: string = 'Default';
  @Output() refreshTheme: EventEmitter<any> = new EventEmitter();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {}

  selectTheme = (theme: string): void => {
    this.selectedTheme = theme;
    this.themeService.setTheme(theme);
    this.refreshTheme.emit(null);
  };
}
