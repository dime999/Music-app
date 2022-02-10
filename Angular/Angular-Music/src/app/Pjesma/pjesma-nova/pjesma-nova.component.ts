import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pjesmaCreationDTO } from '../pjesma.model';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-nova',
  templateUrl: './pjesma-nova.component.html',
  styleUrls: ['./pjesma-nova.component.css']
})
export class PjesmaNovaComponent implements OnInit {

  constructor(private servis:PjesmaService,private router:Router) { }

  ngOnInit(): void {
  }
  saveChanges(pjesma:pjesmaCreationDTO)
  {
    console.log(pjesma);
    this.servis.create(pjesma).subscribe(() => {
      this.router.navigate(['/pjesma']);
    });
  }

}
