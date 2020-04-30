import { Juego } from "./juego";

export class JuegoPiedraPapelTijera  extends Juego{
   public verificar(): boolean {
        throw new Error("Method not implemented.");
   }

  indiceElementoSeleccionado: number;
  //podria ser un array de urls con imagnes de piedra, papel y tijera
  arrayElementos = new Array<string> ("piedra", "papel", "tijera");
  elementoSeleccionado :string;
  palabraIngresada:string;
  puntajeHumano:number=0;
  puntajeCompu:number=0;
  
  //para guardar en el localStorage
  //juego:Juego;
  //jugador:Jugador;

  rondas :number = 0;
  resultadoParcial :string = "";
  resultadoFinal:string = "";
  mostrarSeleccionado: string = "";
  
  cantidadPuntos = 0;

  constructor() {
    super();

    this.inicializarJuego();

 }

  seleccionarElemento() {
    this.indiceElementoSeleccionado = Math.floor(Math.random() * 3);
   // console.log(this.indiceElementoSeleccionado);
    this.elementoSeleccionado = this.arrayElementos[this.indiceElementoSeleccionado];
    console.log("la compu eligio: "  + this.elementoSeleccionado);
    console.log("vos elegiste: " + this.palabraIngresada);
    console.log("Puntos Humano: " + this.puntajeHumano);
  }
 
  

  inicializarJuego() {
    this.seleccionarElemento();
    //this.juego = new Juego();
    //this.juego.nombre = "Piedra Papel Tijera";
    //this.juego.cantidadPuntos =0;
    //this.juego.hora = new Date();
    this.cantidadPuntos =0;
  }


 

   /*
  ngOnInit() {

    this.jugador = JSON.parse(localStorage.getItem('jugador'));
    console.log(this.jugador); 
    this.seleccionarElemento();

  } */

    

    comparar() {

          if(this.elementoSeleccionado == "piedra") {
              
              if(this.palabraIngresada == "piedra") {
                  this.resultadoParcial = "EMPATE";
              }
              else if(this.palabraIngresada == "papel") {
                this.resultadoParcial = "GANO EL USUARIO";
                this.puntajeHumano +=10;
              } 
              else{
                this.resultadoParcial = "GANA LA COMPU";
                this.puntajeCompu +=10;
              }
          }

          else if(this.elementoSeleccionado == "papel") {
              
            if(this.palabraIngresada == "piedra") {
                this.resultadoParcial = "GANA LA COMPU";
                this.puntajeCompu +=10;
            }
            else if(this.palabraIngresada == "papel") {
              this.resultadoParcial = "EMPATE";
            } 
            else{
              this.resultadoParcial = "GANA EL USUARIO";
              this.puntajeHumano +=10;
            }
        }

        else if(this.elementoSeleccionado == "tijera") {
              
          if(this.palabraIngresada == "piedra") {
              this.resultadoParcial = "GANA EL USUARIO"; 
              this.puntajeHumano +=10;
          }
          else if(this.palabraIngresada == "papel") {
            this.resultadoParcial = "GANA LA COMPU"; 
            this.puntajeCompu +=10;
          } 
          else{
            this.resultadoParcial = "EMPATE"; 
          }
      }

      
      this.rondas++;

      if(this.rondas % 3 == 0) { //-----------------------------
          

          if(this.puntajeCompu > this.puntajeHumano) {
             this.resultadoFinal ="RESULTADO FINAL: GANO LA COMPU";
          }
          else if(this.puntajeCompu < this.puntajeHumano) {
             this.resultadoFinal = "RESULTADO FINAL: GANASTE";
          }
          else{
            this.resultadoFinal ="RESULTADO FINAL: EMPATE";
          }
          this.finalizar();
          this.inicializarJuego();
          this.puntajeCompu =0;
        //  this.puntajeHumano =0;
          this.resultadoFinal = "";
         // this.rondas =0;
          
      }
      
  }

  
  clickPapel(){
    this.palabraIngresada = "papel";
    this.comparar();
    //this.elementoSeleccionado ="";
    this.mostrarSeleccionado = "";
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado="";
    //Primer asignarpuntaje a la compu y al usuario
    //contador de cantidad rondas
    //puntaje para la compu y el humano.
  }
  clickPiedra(){
    this.palabraIngresada = "piedra";
    this.comparar();

    this.mostrarSeleccionado = "";
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado="";
  }
  clickTijera() {
    this.palabraIngresada = "tijera";
    this.comparar();
    
    this.mostrarSeleccionado = "";
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado="";
  }

  /*
  JugarOtraVez() {
    this.puntajeHumano = 0;
    this.puntajeCompu = 0;
  }*/
   
  finalizar(){
    //clearInterval(this._timer);
    //4.finaliza el juego, cargas datos
    //this.juego.cantidadPuntos=this.puntajeHumano;
    //this.jugador.juegos.push(this.juego);
    //5. guardas en la base de datos
    //localStorage.setItem('jugador', JSON.stringify(this.jugador));
    //console.log(this.jugador);

    //6.resetas el juego
    this.inicializarJuego();
   // this.puntajeHumano = 0;
    this.puntajeCompu = 0;


 }


}
