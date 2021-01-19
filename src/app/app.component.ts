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
    this.columns = ['name', 'age'];
    this.data = [
      {
        name: 'Ronald',
        age: 22,
      },
      {
        name: 'Pepito',
        age: 21,
      }
    ]
  }
}
