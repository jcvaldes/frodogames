import { Juego } from "./juego";

export class Jugador {


    nombre: string;
    juegos?:Array<Juego>;
    usuario:string;
    contras:string;
    
     constructor(_nombre, _usuario, _contras){
       this.nombre= _nombre;
       this.usuario = _usuario;
       this.contras = _contras;
       //
       this.juegos = new Array<Juego>();
    } 



}
