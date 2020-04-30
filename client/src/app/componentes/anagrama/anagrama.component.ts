import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  anagrama: JuegoAnagrama;
  constructor() { 
      this.anagrama = new JuegoAnagrama();
     // this.anagrama.cargarListaPalabras();
     this.anagrama.inicializarJuego();
  }

  ngOnInit() {
   // this.anagrama.cargarListaPalabras();
     this.anagrama.inicializarJuego();
  }

}
