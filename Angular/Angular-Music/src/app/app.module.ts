import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import{MatIconModule}from'@angular/material/icon'
import{MatButtonModule} from '@angular/material/button';
import { KategorijaIndexComponent } from './Kategorija/kategorija-index/kategorija-index.component';
import { KategorijaFormaComponent } from './Kategorija/kategorija-forma/kategorija-forma.component';
import { KategorijaNovaComponent } from './Kategorija/kategorija-nova/kategorija-nova.component'
import{MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import{MatInputModule} from '@angular/material/input'
import{MatSelectModule} from '@angular/material/select'

import{HttpClientModule} from '@angular/common/http';
import { GenericListComponent } from './Helpers/generic-list/generic-list.component';
import{MatTableModule} from'@angular/material/table'



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    KategorijaIndexComponent,
    KategorijaFormaComponent,
    KategorijaNovaComponent,
    GenericListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
