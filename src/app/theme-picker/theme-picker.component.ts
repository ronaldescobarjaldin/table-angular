import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ServiceTableService } from '../services/service-table.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.css'],
})
export class ThemePickerComponent implements OnInit {

  @Input() themes: string[] = [];
  @Input() selectedTheme: string = 'Default';


  constructor(private serviceTableService: ServiceTableService) {}

  ngOnInit(): void {}

  selectTheme = (theme: string): void => {
    this.selectedTheme = theme;
    localStorage.setItem('theme', theme);
    this.serviceTableService.theme();
  };
}
