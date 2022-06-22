import { Component, OnInit } from '@angular/core';
import { Operacion } from '../models/operacion';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { OperacionImpl } from '../models/operacion-impl';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  operacion: Operacion = new OperacionImpl;
  private urlEndPoint: string = "https://cibops.herokuapp.com/api/actividadesoperativas/21/operacion"

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.urlEndPoint).subscribe(res =>
      this.operacion = this.mapearOperacion(res));
  }

  mapearOperacion(operacionApi: any): OperacionImpl {
    let operacion: Operacion = new OperacionImpl();
    operacion.urlOperacion = operacionApi._links.self.href;
    return operacion;
  }

}
