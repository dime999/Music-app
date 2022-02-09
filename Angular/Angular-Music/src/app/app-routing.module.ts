import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KategorijaIndexComponent } from './Kategorija/kategorija-index/kategorija-index.component';
import { KategorijaNovaComponent } from './Kategorija/kategorija-nova/kategorija-nova.component';

const routes: Routes = [

  {path:'kategorija',component:KategorijaIndexComponent},
  {path:'kategorija/nova',component:KategorijaNovaComponent},

]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
