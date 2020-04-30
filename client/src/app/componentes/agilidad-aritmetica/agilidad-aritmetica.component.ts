import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
//import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import { timer } from "rxjs";
import { Juego } from '../../clases/juego';
import { JuegoAgilidad } from '../../clases/juego-agilidad';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  reloj: number;
  //repetidor:any;
  private subscription: Subscription;
  _timer:any;

  ngOnInit() {

    this._timer = setInterval(() => this.contador(), 1000);
  }
   constructor() {
     this.ocultarVerificar=true;
     this.reloj=5; 
    this.nuevoJuego = new JuegoAgilidad();
    //------
    this.nuevoJuego.cargarNumeros();
    //--------
    console.info("Inicio agilidad");
  }

  
   NuevoJuego() {
    clearInterval(this._timer);
    this.nuevoJuego.cargarNumeros();
    this._timer = setInterval(() => this.contador(), 1000);
   }

   contador(){
    //clearInterval(myVar);
    this.reloj--;
    if(this.reloj<=0){
      clearInterval(this._timer);
      //alert("Se te acabo el tiempo");
      //this.puntos=this.puntos-10;
      this.reloj=5;
      this.nuevoJuego.nivel = 1;
      this.nuevoJuego.limite = 10; //limite de los numeros aleatorios

      this.NuevoJuego();

      this.nuevoJuego.pasarSiguiente();

     

    }
  // this.pasarSiguiente();
  }

  subirDeNivel() {
    this.nuevoJuego.limite += 20;
    this.nuevoJuego.nivel++;
    clearInterval(this._timer);
    this._timer = setInterval(() => this.contador(), 1000);
    //this.resetearColorBotones();
    if(this.nuevoJuego.puntos > this.nuevoJuego.maximo_puntaje) {
      this.nuevoJuego.maximo_puntaje = this.nuevoJuego.puntos;
    }
}
  
comparar() {
  if(this.nuevoJuego.res == this.nuevoJuego.resUsuario) {
     this.nuevoJuego.comparacion ="CORRECTO";
    // this.resUsuario = 0;
     this.nuevoJuego.puntos=this.nuevoJuego.puntos+10;  
     if(this.nuevoJuego.puntos % 50 == 0) {
       this.subirDeNivel();
     }      
     //clearInterval(this._timer);  
     this.reloj=5;
     this.nuevoJuego.pasarSiguiente();
  }
  else{
    this.nuevoJuego.comparacion ="INCORRECTO-Escriba de vuelta el resulta";
    
    /*
    if(this.reloj <= 0) {
      this.nuevoJuego.comparacion = "GAME OVER";
      this.reloj =0;
      clearInterval(this._timer); 
    }
    */

      
  }
  
  console.log(this.nuevoJuego.num1 + " " + this.nuevoJuego.operadorSeleccionado + " " + this.nuevoJuego.num2);

}

/*
  verificar()
  {
    this.ocultarVerificar=false;
   // clearInterval(this.repetidor);
  }
  */
 
}




