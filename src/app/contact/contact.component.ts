import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public title: string;
  public params;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.title = "Componente Contacto";
  }

  ngOnInit() {
    this._route.params.forEach((param: Params)=>{
      this.params = param["page"];
    });
  }

  redirigir(){
    this._router.navigate(['/contact','julioSanchezweb.es']);
  }
  redirigir2(){
    this._router.navigate(['/home']);
  }
}
