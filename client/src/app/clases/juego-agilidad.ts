import { Jugador } from "./jugador";
import { Juego } from "./juego";

export class JuegoAgilidad extends Juego {
    public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
   /* public verificar(): boolean {
        throw new Error("Method not implemented.");
    }*/
    numeroIngresado:number;
    gano:boolean;

    nombreJuego = "Agilidad Aritmetica";
    num1:number;
    num2:number;
    res:number;
    operadorSeleccionado:string;
    indiceOperador: number;
    resUsuario :number;
    _timer:any;
    comparacion :string;
    reloj:number =10;
    puntos:number=0;
    maximo_puntaje:number = 0;
    //1 creas el jugador
    //jugador:Jugador;
    juego:Juego;
    nivel:number = 1;
    limite:number = 10;


    constructor(nombre?: string, gano?: boolean,jugador?:string,_puntos?: number, _hora?:Date) 
    { 
        super(nombre, gano, jugador, _puntos, _hora)
      //2.colocar nombre del juego
      // this.juego = new Juego
      // this.juego.nombre = "Agilidad Aritmetica";
      // this.juego.cantidadPuntos =0;
      // this.juego.hora = new Date();
      //console.log(this.juego);


  
    }

    /*
    comenzar() { // esta funcion deberia estar en el componente AgilidadAritmeticaComponent
        clearInterval(this._timer);
        this.cargarNumeros();
        this._timer = setInterval(() => this.contador(), 1000);
    }
    */
   
    cargarNumeros() {

        this.num1  = Math.floor(Math.random() * this.limite);
        this.num2  = Math.floor(Math.random() * this.limite);
        this.indiceOperador = Math.floor(Math.random() * 3);
    
        if(this.indiceOperador == 0) {
          this.res = this.num1 + this.num2;
          this.operadorSeleccionado = "+";
        }
        else if(this.indiceOperador == 1) {
            this.res = this.num1 - this.num2;
            this.operadorSeleccionado = "-";
        }
        else if(this.indiceOperador == 2) {
            this.res = this.num1 * this.num2;
            this.operadorSeleccionado = "x";
        }
      }

      /*
      comparar() {
        if(this.res == this.resUsuario) {
           this.comparacion ="CORRECTO";
          // this.resUsuario = 0;
           this.puntos=this.puntos+10;  
           if(this.puntos % 50 == 0) {
             //this.subirDeNivel();
           }      
           clearInterval(this._timer);  
           this.reloj=10;
           this.pasarSiguiente();
        }
        else{
          this.comparacion ="INCORRECTO-Escriba de vuelta el resulta";
          
          
          //if(this.puntos>=0){
          // this.puntos=this.puntos-10;
          //}    
        }
        
        console.log(this.num1 + " " + this.operadorSeleccionado + " " + this.num2);

      }*/

      

      pasarSiguiente(){
        //this._timer = setInterval(() => this.contador(), 1000);
        this.cargarNumeros();
      // this.resUsuario = "";
      }

    
      


      finalizar(){
        /*clearInterval(this._timer);
        //4.finaliza el juego, cargas datos
        this.juego.cantidadPuntos = this.puntos;
        this.jugador.juegos.push(this.juego);
        //5. guardas en la base de datos
        localStorage.setItem('jugador', JSON.stringify(this.jugador));
        console.log(this.jugador);
    
        //6.resetas el juego
         this.juego = new Juego();
         this.juego.nombre = "Agilidad Aritmetica";
         this.juego.cantidadPuntos =0;
         this.juego.hora = new Date();
         */
    
       }


}
