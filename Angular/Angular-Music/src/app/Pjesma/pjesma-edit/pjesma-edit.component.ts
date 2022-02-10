import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { KategorijaFormaComponent } from 'src/app/Kategorija/kategorija-forma/kategorija-forma.component';
import { KategorijaService } from 'src/app/Kategorija/kategorija.service';
import { MojConfig } from 'src/app/moj-config';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-edit',
  templateUrl: './pjesma-edit.component.html',
  styleUrls: ['./pjesma-edit.component.css']
})
export class PjesmaEditComponent implements OnInit {
  @Input()
  urediPjesmu: any;

  kategorije:any;


  constructor(private service: KategorijaService,private servicecPjesma:PjesmaService,private klijent:HttpClient) { 
    this.service.getAll().subscribe((x:any)=>{
      this.kategorije=x;
    });
  }

  ngOnInit(): void {
  }

  snimi(){
  this.servicecPjesma.edit(this.urediPjesmu.id,this.urediPjesmu).subscribe(()=>{
    this.urediPjesmu.prikazi=false;
  })

  }

}
