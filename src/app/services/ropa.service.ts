import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
    public namePrueba='Pantalones Vaqueros';

    prueba(){
        return this.namePrueba;
    }
}