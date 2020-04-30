import { Juego } from "./juego";

export class JuegoPrimos extends Juego {
    public verificar(): boolean {
        throw new Error("Method not implemented.");
    }

    listaPrimos:Array<number>;
 // _timer:any;
 
  listaAleatorios: Array<number>;
  estadoBotones:string[][] = [ 
      ["white", "white", "white", "white", "white" ],
      ["white", "white", "white", "white", "white" ],
      ["white", "white", "white", "white", "white" ],
      ["white", "white", "white", "white", "white" ],
      ["white", "white", "white", "white", "white" ],
  ];
  posiciones:number[][] = [[0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0],
                           [0,0,0,0,0]];

  totalPrimos:number = 0;
  limite:number = 30;
  reloj:number = 25;
  nivel :number = 1;
  puntos: number = 0;
  maximo_puntaje:number = 0;
  juego: Juego;
  // jugador:Jugador;

  constructor(nombre?: string, gano?: boolean,jugador?:string,_puntos?: number, _hora?:Date) 
  {
    super(nombre, gano, jugador, _puntos, _hora )

   // clearInterval(this._timer);
   // this._timer = setInterval(() => this.contador(), 1000);
    this.resetearColorBotones();
    this.inicializar();
     

   } 
  


  //para cargar a los numeros primos en una lista
  cribaDeEratostenes(n:number) {
      let primos = new Array<Boolean>();
      for(let i =0; i<n; i++) {
         primos.push(true);
      }

      for(let p = 2; p*p <= n; p++) 
      { 
            if(primos[p] == true) 
            { 
                for(let i = p * p; i <= n; i += p) 
                    primos[i] = false; 
            } 
      } 

      for(let i = 2; i <= n; i++) 
      { 
          if(primos[i] == true)  {
              //Console.Write(i + " "); 
              this.listaPrimos.push(i);
          }
      } 

  }
  
  
  subirDeNivel() {
      this.limite += 50;
      this.nivel++;
     // clearInterval(this._timer);
     // this._timer = setInterval(() => this.contador(), 1000);
      this.resetearColorBotones();
      if(this.puntos > this.maximo_puntaje) {
        this.maximo_puntaje = this.puntos;
      }
  }

   IniciarJuego() {

   // clearInterval(this._timer);
    this.inicializar();
   // this._timer = setInterval(() => this.contador(), 1000);
   // this.resetearColorBotones();
  }


  

   resetearColorBotones() {
    for(let i =0; i<5; i++) {
      for(let j =0; j<5; j++) {
        this.estadoBotones[i][j] = "white";
      }
    }
   }
   
    inicializar() {
    //  clearInterval(this._timer);
     // this._timer = setInterval(() => this.contador(), 1000);
      this.totalPrimos = 0;
      //this.limite = 20;
      this.reloj =30;
      //this.puntos =0; 
      this.listaPrimos = new Array<number>();
      this.cribaDeEratostenes(this.limite);
      this.listaAleatorios = new Array<number>();
      //this.estadoBotones = new Array<string>();
     
 
      for(let i = 0; i < 25; i++) {
           this.listaAleatorios.push(Math.floor(Math.random() * this.limite) + 1);
          // this.estadoBotones.push(this.listaAleatorios[i].toLocaleString());
          if(this.listaPrimos.indexOf(this.listaAleatorios[i])>=0){
            this.totalPrimos++;
          }
      }
      
      this.resetearColorBotones();

      let indice = 0;
      for(let i =0; i < 5; i++) {
         for(let j =0; j < 5; j++) {
            this.posiciones[i][j] = this.listaAleatorios[indice]; 
            
            //this.estadoBotones[i][j] = this.listaAleatorios[indice].toLocaleString();
            indice++;
         }
      }

    }


   
   contador(){
    //clearInterval(myVar);
      this.reloj--;
      if(this.reloj<=0){
        this.nivel = 1;
        this.limite = 20;

        if(this.puntos > this.maximo_puntaje) {
           this.maximo_puntaje = this.puntos;
        }

        this.puntos = 0 ;

      //  clearInterval(this._timer);
        this.resetearColorBotones();
       // alert("Se te acabo el tiempo");
        this.inicializar();
       
      }

  }
   

  
  presion(fila:number,columna:number) {
    if(this.listaPrimos.indexOf(this.posiciones[fila][columna]) >= 0) {
      this.estadoBotones[fila][columna] = "green"; 
      this.totalPrimos--;
      this.puntos += 10;
      
      
      if(this.totalPrimos == 0) {
          
        //  clearInterval(this._timer);
          this.resetearColorBotones();
          this.subirDeNivel();
          this.inicializar();
      }

    }
    else{
      this.estadoBotones[fila][columna] = "red"; 
      this.reloj -= 3; //los errores cuestan tiempo
    }
    
  }

  /*
  inicializarJuego() {
   // this.juego = new Juego();
    //this.juego.nombre = "Primos";
   // this.juego.cantidadPuntos = 0;
   // this.juego.hora = new Date();
  }*/
  
  JugarOtraVez() {
    this.puntos = 0;
  }


  finalizar(){
    //clearInterval(this._timer);
    //4.finaliza el juego, cargas datos
    this.juego.cantidadPuntos=this.puntos;
    //this.jugador.juegos.push(this.juego);
    //5. guardas en la base de datos
    localStorage.setItem('jugador', JSON.stringify(this.jugador));
    console.log(this.jugador);

    //6.reseteo el juego
    //this.inicializarJuego();
    this.JugarOtraVez();
 }

    

}