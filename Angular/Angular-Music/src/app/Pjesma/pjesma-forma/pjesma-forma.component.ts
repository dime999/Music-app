import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { KategorijaService } from 'src/app/Kategorija/kategorija.service';
import { MojConfig } from 'src/app/moj-config';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-forma',
  templateUrl: './pjesma-forma.component.html',
  styleUrls: ['./pjesma-forma.component.css']
})
export class PjesmaFormaComponent implements OnInit {
  @Input()
  dodajPjesmu: any;

  kategorije:any;

  constructor(private service: KategorijaService,private servicecPjesma:PjesmaService,private klijent:HttpClient) { 
    this.service.getAll().subscribe((x:any)=>{
      this.kategorije=x;
    });
  }

  ngOnInit(): void {
  }

  snimi(){
    this.servicecPjesma.create(this.dodajPjesmu).subscribe(()=>{
      this.dodajPjesmu.prikazi=false;
    })
    }

}
