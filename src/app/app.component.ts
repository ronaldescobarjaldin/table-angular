import { Component } from '@angular/core';
import { ServiceTableService } from './services/service-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'My Table';
  private tableUrl = 'api/table';
  columns: string[];
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
        .subscribe(({ titulos, encabezados, datos }) => {
        const { titulo, pie } = titulos;
        this.tableTitle = titulo;
        this.tableFooter = pie;
        this.columns = encabezados;
        this.data = datos;
      });
  }
}
