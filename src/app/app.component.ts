import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Table';
  columns: string[];
  data: any[];
  
  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.columns = ['name', 'age', 'career', 'birthDate'];
    this.data = [
      {
        name: 'Ronald',
        age: 22,
        career: 'Sistemas',
        birthDate: '07/01/1999'
      },
      {
        name: 'Pepito',
        age: 21,
        career: 'Comercial',
        birthDate: '15/11/1998'
      },
    ];
  }
}
