import { Injectable } from '@angular/core';

@Injectable()
export class RopaService{
    private namePrueba='Pantalones Vaqueros';
    private listRopa=['camisa','pantalon','abrigo','medias'];    
    prueba(){
        return this.namePrueba;
    }

    addRopa(value){
        this.listRopa.push(value);
    }

    getRopa(){
        return this.listRopa;
    }

    deleteRopa(index:number):Array<string>{
        this.listRopa.splice(index,1);
        return this.getRopa();
    }
}