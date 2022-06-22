import { Component, Input, OnInit } from '@angular/core';
import { Operacion } from '../models/operacion';
import { OperacionImpl } from '../models/operacion-impl';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-operacion-item',
  templateUrl: './operacion-item.component.html',
  styleUrls: ['./operacion-item.component.css']
})
export class OperacionItemComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faPencil = faPencil;
  faTrashCan = faTrashCan;

  @Input() operacion: Operacion = new OperacionImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
