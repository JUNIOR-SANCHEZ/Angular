import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RopaService]
})
export class HomeComponent implements OnInit {

  public title: string;
  public listRopa: Array<string>;
  public newRopa: string;
  public fecha;
  constructor(
    private _ropaService: RopaService
  ) {
    this.title = "Componente Home";
    this.fecha = new Date(2018,4,8);
   }

  ngOnInit() {
    this.listRopa = this._ropaService.getRopa();
    console.log(this._ropaService.prueba());
  }
  addRopa(){
    this._ropaService.addRopa(this.newRopa);
    this.newRopa = null;
  }
  eliminarPrenda(index:number){
    this._ropaService.deleteRopa(index);
  }

}
