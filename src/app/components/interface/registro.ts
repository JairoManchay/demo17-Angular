import { Pais } from "../listaPaises/pais";

export interface Registro {
  nombre: '';
  correo: '';
  telefono: 0;
  paises: Pais.escoja;
  sujeto:'';
  mensaje:'';
}
