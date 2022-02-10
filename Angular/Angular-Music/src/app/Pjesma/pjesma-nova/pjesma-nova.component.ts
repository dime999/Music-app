import { Component, OnInit } from '@angular/core';
import { pjesmaCreationDTO } from '../pjesma.model';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-nova',
  templateUrl: './pjesma-nova.component.html',
  styleUrls: ['./pjesma-nova.component.css']
})
export class PjesmaNovaComponent implements OnInit {

  constructor(private servis:PjesmaService) { }

  ngOnInit(): void {
  }
  saveChanges(pjesma:pjesmaCreationDTO)
  {
    console.log(pjesma);
    this.servis.create(pjesma).subscribe(() => {
      
    });
  }

}
