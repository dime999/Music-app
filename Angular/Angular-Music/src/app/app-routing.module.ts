import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KategorijaIndexComponent } from './Kategorija/kategorija-index/kategorija-index.component';
import { KategorijaNovaComponent } from './Kategorija/kategorija-nova/kategorija-nova.component';
import { PjesmaEditComponent } from './Pjesma/pjesma-edit/pjesma-edit.component';
import { PjesmaIndexComponent } from './Pjesma/pjesma-index/pjesma-index.component';
import { PjesmaNovaComponent } from './Pjesma/pjesma-nova/pjesma-nova.component';

const routes: Routes = [

  {path:'kategorija',component:KategorijaIndexComponent},
  {path:'kategorija/nova',component:KategorijaNovaComponent},
  {path:'pjesma',component:PjesmaIndexComponent},
  {path:'pjesma/edit/:id',component:PjesmaEditComponent},
  {path:'pjesma/nova',component:PjesmaNovaComponent},
  



]
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
