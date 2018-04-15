import { Component, OnInit } from '@angular/core';
import { Coche } from './coche'
@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  private title = "Pagina Coches"
  constructor(
    public coche: Coche
  ) { }

  ngOnInit() {
  }

}
