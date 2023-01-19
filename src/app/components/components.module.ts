import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { InformacionComponent } from './informacion/informacion.component';
import { TablaComponentComponent } from './tabla-component/tabla-component.component';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { BuscarDataComponent } from './buscar-data/buscar-data.component';




@NgModule({
  declarations: [
    ContactoComponent,
    HomeComponent,
    InformacionComponent,
    TablaComponentComponent,
    MenuComponent,
    BuscarDataComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[
    ContactoComponent,
    HomeComponent,
    InformacionComponent,
    TablaComponentComponent,
    MenuComponent,
    BuscarDataComponent
  ]
})
export class ComponentsModule { }
