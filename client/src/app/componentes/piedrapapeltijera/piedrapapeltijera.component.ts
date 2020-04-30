import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent implements OnInit {

  ppt : JuegoPiedraPapelTijera;
  tamImagenes = 500;
  constructor() 
  {
     this.ppt = new JuegoPiedraPapelTijera();
     this.ppt.inicializarJuego();
  }

  ngOnInit(): void {
    this.ppt.inicializarJuego();
  }

}
