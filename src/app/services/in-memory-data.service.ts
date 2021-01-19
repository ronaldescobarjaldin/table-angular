import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  
  constructor() {}

  createDb() {
    const table = {
      titles: {
        title: 'tabla muestra',
        footer: 'catolica',
      },
      headers: ['Nombre', 'Carrera', 'semester', 'Año de nacimiento'],
      data: [
        {
          name: 'Marcelo Duran',
          career: 'comercial',
          semester: '1-2019',
          birthYear: 1999,
        },
        {
          name: 'Carlos Dub',
          career: 'sistemas',
          semester: '1-2018',
          birthYear: 1999,
        },
        {
          name: 'Ana soliz',
          career: 'civil',
          semester: '1-2017',
          birthYear: 1999,
        },
        {
          name: 'Cristian Pardo',
          career: 'Mecanica',
          semester: '1-2020',
          birthYear: 1999,
        },
        {
          name: 'Pepito perez',
          career: 'Mecanica',
          semester: '1-2020',
          birthYear: 1999,
        },
      ],
    };
    return { table };
  }
}
