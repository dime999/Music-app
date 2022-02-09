import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { kategorijaCreationDTO } from '../kategorija.model';

@Component({
  selector: 'app-kategorija-forma',
  templateUrl: './kategorija-forma.component.html',
  styleUrls: ['./kategorija-forma.component.css']
})
export class KategorijaFormaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;
  
  @Output()
  onSaveChanges: EventEmitter<kategorijaCreationDTO>=new EventEmitter<kategorijaCreationDTO>();

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      ime: ['',{
        validators:[Validators.required, Validators.minLength(3)]
      }]


    });
  }

  saveChanges()
  {
    
    this.onSaveChanges.emit(this.form.value);
  }
  getErrorMessageFieldName()
  {
    const field=this.form.get('ime');
    
    if(field?.hasError('required')){
      return 'Morate unijeti ime kategorije';
    }
    if(field?.hasError('minlenght'))
    {
      return 'Minimalna duzina karaktera je 3';
    }
    return '';
  }

}
