import { Component, OnInit } from '@angular/core';
import {  pjesmaDTO } from '../pjesma.model';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-index',
  templateUrl: './pjesma-index.component.html',
  styleUrls: ['./pjesma-index.component.css']
})
export class PjesmaIndexComponent implements OnInit {

  pjesma:any;
  columnsToDisplay=['naziv','nazivIzvodjaca','url','ocjena','favorit','datumUnosaPjesme','datumEditovanja','kategorija','actions'];
  urediPjesmu:any=null;
  constructor(private service: PjesmaService) { }

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

}
