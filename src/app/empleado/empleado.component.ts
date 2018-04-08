import { Component, OnInit } from '@angular/core';
import { Employee } from './empleado'
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public title:string;
  public employee:Employee;
  public workers:Array<Employee>; 
  public externalWorker:boolean;
  constructor() {
    this.title = "Curso de Angular";
    this.employee = new Employee("Julio Sánchez",26,"Programador",false);
    this.workers=[
      new Employee("Juan Aguirre",28,"Programador",true),
      new Employee("Manuel Perez",28,"Disñador",true),
      new Employee("Lorena Zambrano",24,"Farmaceutica",false),
      new Employee("Monica Sanchez",25,"Secretaria",true)
    ];
    this.externalWorker = false;
   }

  ngOnInit() {
  }
  changeExternal(value){
    this.externalWorker = value;
  };

}
