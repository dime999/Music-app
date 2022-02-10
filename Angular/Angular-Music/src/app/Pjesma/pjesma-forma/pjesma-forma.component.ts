import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KategorijaService } from 'src/app/Kategorija/kategorija.service';
import { MojConfig } from 'src/app/moj-config';
import { pjesmaCreationDTO } from '../pjesma.model';
import { PjesmaService } from '../pjesma.service';

@Component({
  selector: 'app-pjesma-forma',
  templateUrl: './pjesma-forma.component.html',
  styleUrls: ['./pjesma-forma.component.css']
})
export class PjesmaFormaComponent implements OnInit {
 

  kategorije:any;

  constructor(private service: KategorijaService,private servicecPjesma:PjesmaService,private klijent:HttpClient,private formBuilder:FormBuilder) { 
    this.service.getAll().subscribe((x:any)=>{
      this.kategorije=x;
    });
  }
  form!:FormGroup;
  formData: FormData = new FormData();


  
  @Output()
  onSaveChanges = new EventEmitter<pjesmaCreationDTO>();

  ngOnInit(): void {


    this.form = this.formBuilder.group({
      naziv: ['', {
        validators: [Validators.required]
      }],
      nazivIzvodjaca: '',
      url:'',
      ocjena: 1,
      favorit:true,
      datumUnosaPjesme: "2003-10-01",
      datumEditovanja:"2003-10-01",
      kategorija_id: 1,
    });

   
  }

  saveChanges() {


    this.onSaveChanges.emit(this.form.value);
  }

}
