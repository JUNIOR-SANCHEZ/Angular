import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

//Importar componentes
import { EmpleadoComponent } from './empleado/empleado.component';
import { FrutaComponent } from './fruta/fruta.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'

const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'empleado',component:EmpleadoComponent},
    {path:'fruta',component:FrutaComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'**',component:HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);