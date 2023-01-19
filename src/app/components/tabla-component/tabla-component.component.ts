import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla-component.component.html',
  styleUrls: ['./tabla-component.component.css']
})
export class TablaComponentComponent {

  // component que recibe array del contacto
  @Input() dataArr:any[]=[];

  @Input() paises=0;
}
