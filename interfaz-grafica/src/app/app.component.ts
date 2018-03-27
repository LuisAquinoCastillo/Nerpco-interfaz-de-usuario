import { Component, Input } from '@angular/core';
import { Autobus } from './autobus';
import { HttpClient } from '@angular/common/http';
/* Importacion de clase 'Estatus' */
import { Estatus } from './estatus';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  autobuses: Autobus[];
  estatus: Estatus;

  nuevoAutobus: Autobus = {
    marcaAutobus: 'ADO platino',
    tipoAutobus: 'Irizar i8',
    numeroAsientos: '25'
  }
  /* atributo referenciado *
     constructor */
  constructor(private http: HttpClient) {
    /* Generación de un thread */
    setTimeout(() => {
      this.http.get<Autobus[]>('https://conexion-autobuses.herokuapp.com/api/autobus').
        subscribe(respuesta => { this.autobuses = respuesta; });
    }, 1200);
  }

  guardarAutobus() {
    /* Metodo Post */
    this.http.post<Estatus>('https://conexion-autobuses.herokuapp.com/api/autobus', this.nuevoAutobus).
    subscribe(respuesta => { this.estatus = respuesta });

    setTimeout(() => {}, 1500);
  }

  actualizarAutobus() {
    /* Metodo Put */
    this.http.put<Estatus>('https://conexion-autobuses.herokuapp.com/api/autobus', this.nuevoAutobus).
    subscribe(respuesta => { this.estatus = respuesta });

    setTimeout(() => {}, 1500);
  }

}
