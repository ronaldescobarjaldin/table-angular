import { Component } from '@angular/core';
import { ServiceTableService } from './services/service-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Mi aplicación de prueba';
  private tableUrl = 'api/table';
  private subjectTableUrl = 'api/subjectTable';
  headers: string[];
  subjectHeaders: string[];
  data: any[];
  subjectData: any[];
  subjectTableTitle: string;
  tableTitle:string;
  tableFooter: string;

  constructor(private tableService: ServiceTableService) {}

  ngOnInit(): void {
    this.getData();
    this.getSubjectData();
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

  getSubjectData(): void {
    this.tableService
    .getDataTableApi(this.subjectTableUrl)
    .subscribe(({ titles, headers, data }) => {
    const { title, footer } = titles;
    this.subjectTableTitle = title;
    this.tableFooter = footer;
    this.subjectHeaders = headers;
    this.subjectData = data;
  });
  }
}
