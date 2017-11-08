import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {
  aLibros: Array<string>;
  constructor() {
    this.aLibros = [
      'platero y yo',
      '100 años de soledad',
      'cuatro amigos'
    ];
   }

   buscarLibros(clave: string) {
    return this.aLibros;
   }
}
