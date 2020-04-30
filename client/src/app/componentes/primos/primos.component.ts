import { Component, OnInit } from '@angular/core';
import { JuegoPrimos } from '../../clases/juego-primos';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  primos = new JuegoPrimos();
  constructor() { 
    this.primos.IniciarJuego();
  }

  _timer:any;

  ngOnInit() {
    this.primos.IniciarJuego();
      this._timer = setInterval(() => this.contador(), 1000);
    }

    contador(){
      //clearInterval(myVar);
      this.primos.reloj--;
      if(this.primos.reloj<=0){
        clearInterval(this._timer);
        //alert("Se te acabo el tiempo");
        //this.puntos=this.puntos-10;
        this.primos.reloj=30;
        this.primos.maximo_puntaje = this.primos.puntos;
        this.primos.puntos = 0;
        this.primos.resetearColorBotones();
        this.primos.nivel = 1;
        
        //this.primos.limite = 10; //limite de los numeros aleatorios
  
        //this.NuevoJuego();
  
        //this.nuevoJuego.pasarSiguiente();
  
       
  
      }
    // this.pasarSiguiente();
    }
 
    

}
