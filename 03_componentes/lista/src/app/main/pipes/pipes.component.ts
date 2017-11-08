import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nNumero: number;
  nPercent: number;
  nPrecio: number;
  dFecha: Date;
  oLibro: {autor: string, libro: string};
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe pérez';
    this.nNumero = 34.8734;
    this.nPercent = 54;
    this.nPrecio = 35.506;
    this.dFecha = new Date();
    this.oLibro = {autor: 'Cervantes', libro: 'Quijote'};
  }

}
