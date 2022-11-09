import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

//components
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';



const routers: Routes = [
    { path: '', component: ListarProductosComponent },
    { path: 'crear-producto', component: CrearProductoComponent },
    { path: 'editar-prodcuto/:id', component: CrearProductoComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routers)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
