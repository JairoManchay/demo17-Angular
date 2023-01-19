import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar-data',
  templateUrl: './buscar-data.component.html',
  styleUrls: ['./buscar-data.component.css']
})
export class BuscarDataComponent {

    // Recibir parametros de otros componentes
    constructor(private ruta: ActivatedRoute){}

    // Simular un entorno de datos


    // Variable para recibir el parametro enviado desde vistafull
    pais="";
    info = new Array();
    cadena:any = "";
    arrDatos:any[] =[];

    // Evento ngOnInit -> Cargar pagina
    // Al cargar la pagina se recibira el valor enviado desde vistafull
    ngOnInit(){
      this.pais = this.ruta.snapshot.params['pais'];
      this.cadena =  this.ruta.snapshot.params['datos'];
      console.log(this.cadena)
      this.info = JSON.parse(this.cadena);
      this.arrDatos.push(this.info);
      console.log(this.arrDatos);
    }
}
