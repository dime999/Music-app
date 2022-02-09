import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { kategorijaCreationDTO } from '../kategorija.model';
import { KategorijaService } from '../kategorija.service';


@Component({
  selector: 'app-kategorija-nova',
  templateUrl: './kategorija-nova.component.html',
  styleUrls: ['./kategorija-nova.component.css']
})
export class KategorijaNovaComponent implements OnInit {

  constructor(private router: Router,private service:KategorijaService) { }

  ngOnInit(): void {
  }

  saveChanges(kategorijaCreateDTO:kategorijaCreationDTO)
  {
    this.service.create(kategorijaCreateDTO).subscribe(()=>{
      this.router.navigate(['kategorija']);
    })
  }


  


}
