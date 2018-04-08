import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[RopaService]
})
export class HomeComponent implements OnInit {

  public title:string;
  constructor(
    private _ropaService: RopaService
  ) {
    this.title = "Componente Home";
   }

  ngOnInit() {
    console.log(this._ropaService.prueba());
  }

}
