import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MojConfig } from 'src/app/moj-config';
import {  pjesmaCreationDTO, pjesmaDTO } from '../pjesma.model';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-index',
  templateUrl: './pjesma-index.component.html',
  styleUrls: ['./pjesma-index.component.css']
})
export class PjesmaIndexComponent implements OnInit {

  pjesma:any;
  ime:string='';
  columnsToDisplay=['naziv','nazivIzvodjaca','url','ocjena','favorit','datumUnosaPjesme','datumEditovanja','kategorija','actions'];
  urediPjesmu:any=null;
  dodajPjesmu:any=null;
  constructor(private service: PjesmaService,private router:Router,private Klijent: HttpClient) { }

  ngOnInit(): void {
    this.LoadData();
  }

  
  LoadData()
  {
    this.service.getAll().subscribe(x=>{
      this.pjesma=x;
    });
    
  }
  




  uredi(element:any)
  {
    this.urediPjesmu=element;
    this.urediPjesmu.prikazi=true;

  }
  obrisi(id:number)
  {
    return this.service.delete(id).subscribe(()=>{
     location.reload(); 
    })
  }
  DodajNovi(){
    this.dodajPjesmu = {
      prikazi:true,
      id:0,
      naziv:"",
      nazivIzvodjaca :"",
      url:"",
      ocjena:1,
      favorit:true,
      datumUnosaPjesme:"2003-10-01",
      datumEditovanja:"2003-10-01",
      kategorija_id:"0"
     
    }
  }

}
