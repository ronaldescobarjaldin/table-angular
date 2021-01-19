import { Component } from '@angular/core';
import { ServiceTableService } from './services/service-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  appTitle = 'Mi aplicación de prueba';
  private tableUrl = 'api/table';
  headers: string[];
  data: any[];
  tableTitle: string;
  tableFooter: string;

  constructor(private tableService: ServiceTableService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.tableService
      .getDataTableApi(this.tableUrl)
        .subscribe(({ titles, headers, data }) => {
        const { title, footer } = titles;
        this.tableTitle = title;
        this.tableFooter = footer;
        this.headers = headers;
        this.data = data;
      });
  }
}
