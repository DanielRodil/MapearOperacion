import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';

@Injectable({
  providedIn: 'root'
})

export class OperacionService {

  private urlEndPoint: string = "https://cibops.herokuapp.com/api/actividadesoperativas/21/operacion"

  constructor(private http: HttpClient) { }

  getOperacion(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
  }

  mapearOperacion(operacionApi: any): OperacionImpl {
    let operacion: Operacion = new OperacionImpl();
    operacion.nombre = operacionApi.nombre;
    operacion.fechaApertura = operacionApi.fechaApertura;
    operacion.descripcion = operacionApi.descripcion;
    operacion.urlOperacion = operacionApi._links.self.href;
    return operacion;
  }

}
