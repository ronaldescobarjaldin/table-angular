import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  // tslint:disable-next-line:typedef
  createDb() {
    const table = {
      titulos: {titulo: 'tabla muestra', pie: 'catolica'},
      encabezados: ['nombre', 'carrera', 'semestre'],
      datos: [
        {
          nombre: 'Marcelo Duran',
          carrera: 'comercial',
          semestre: '1-2019'
        },
        {
          nombre: 'Carlos Dub',
          carrera: 'sistemas',
          semestre: '1-2018'
        },
        {
          nombre: 'Ana soliz',
          carrera: 'civil',
          semestre: '1-2017'
        },
        {
          nombre: 'Cristian Pardo',
          carrera: 'Mecanica',
          semestre: '1-2020'
        }
      ]
    };
    return {table};
  }

}
