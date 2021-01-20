import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ServiceTableService } from '../services/service-table.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent implements OnInit {
  
  @Input() title: string;
  @Input() footer: string;
  @Input() headers: string[];
  @Input() data: any[];

  constructor() {}

  ngOnInit(): void {}

  originalOrder = (
    a: KeyValue<number, string>,
    b: KeyValue<number, string>
  ): number => {
    return 0;
  }

}
