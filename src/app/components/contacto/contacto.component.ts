import { Component } from '@angular/core';
import { Registro } from '../interface/registro';
import { Pais } from '../listaPaises/pais';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  // Creando objeto que reciba datos de la interfaz
  datosReg: Registro={
    nombre:'',
    correo:'',
    telefono:0,
    paises:Pais.escoja,
    sujeto:'',
    mensaje:''
  }

  // Array para guardar los datos
  datoArr: any[] = [];
  dataPAis: any[]=[];
  paises=0;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    for(let item in Pais){
      if(isNaN(Number(item))){
        this.dataPAis.push({texto: item, value: Pais[item]})
      }
    }

  }

  onSubmit(){
    if(this.datosReg.nombre==""){
      return;
    }
    this.datoArr.push(this.datosReg);
    console.log(this.datoArr)
    this.datosReg={
      nombre:'',
      correo:'',
      telefono:0,
      paises:Pais.escoja,
      sujeto:'',
      mensaje:''
    }
  }

}
