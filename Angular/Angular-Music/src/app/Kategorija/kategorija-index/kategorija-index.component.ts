import { Component, OnInit } from '@angular/core';
import { KategorijaDTO } from '../kategorija.model';
import { KategorijaService } from '../kategorija.service';

@Component({
  selector: 'app-kategorija-index',
  templateUrl: './kategorija-index.component.html',
  styleUrls: ['./kategorija-index.component.css']
})
export class KategorijaIndexComponent implements OnInit {

  kategorija: KategorijaDTO[]=[];
  columnsToDisplay=['ime'];

  constructor(private service:KategorijaService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this.service.getAll().subscribe(x=>{
      this.kategorija=x;
    });
  }

}
