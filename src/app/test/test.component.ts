import { Component, OnInit } from '@angular/core';
import { ServiceTableService } from  '../services/service-table.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  private tableUrl = 'api/table';
  datos: any;
  constructor( private service: ServiceTableService) { }

  ngOnInit(): void {
    this.inicializar();
  }
  private inicializar(): void{
   // this.service.getDataTableMocks().subscribe(
     this.service.getDataTableApi(this.tableUrl).subscribe(
      data => this.datos = data,
      error => console.log(error),
      () => {console.log(this.datos);} );

  }

}
