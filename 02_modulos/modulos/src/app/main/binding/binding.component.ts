import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  public sNombre: string;
  public nNumber: number;
  public isEspaniol: boolean;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Joserra';
    this.nNumber = 22;
    this.isEspaniol = true;
  }

  btnBorrar() {
    this.sNombre = '';
  }


}
