import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { BuscarDataComponent } from './components/buscar-data/buscar-data.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'informacion',
    component: InformacionComponent
  },
  {
    path:'contacto',
    component: ContactoComponent
  },
  {
    path:'listado/:datos/:pais',
    component: BuscarDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
