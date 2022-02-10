import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utils';
import { pjesmaCreationDTO, pjesmaDTO } from './pjesma.model';

@Injectable({
  providedIn: 'root'
})
export class PjesmaService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/pjesma';


  getAll(): Observable<pjesmaDTO[]>
  {
    return this.http.get<pjesmaDTO[]>(this.apiURL);
  }

  

 getById(id:number):Observable<pjesmaDTO>
 {
   return this.http.get<pjesmaDTO>(`${this.apiURL}/${id}`);
 }


  create(pjesma:pjesmaCreationDTO){
    const formData=this.BuildFormData(pjesma);
    return this.http.post(this.apiURL,pjesma);
  }

  edit(id:number,urediPjesmu:any)
  {
    return this.http.put((`${this.apiURL}/${id}`),urediPjesmu);
  }

  delete(id:number)
  {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
  public filter(value:any): Observable<pjesmaDTO[]>{
    const params = new HttpParams({fromObject:value});
    return this.http.get<pjesmaDTO[]>(`${this.apiURL}/filter`);
  }

  

  private BuildFormData(pjesma: pjesmaCreationDTO) : FormData
  {

    const formData=new FormData();
    formData.append('naziv',pjesma.naziv);
    formData.append('nazivIzvodjaca',pjesma.nazivIzvodjaca);
    formData.append('url',pjesma.url);
    formData.append('ocjena',String(pjesma.ocjena));
    formData.append('favorit',String(pjesma.favorit));
     if(pjesma.datumUnosaPjesme)
    {
      formData.append('datumUnosaPjesme',formatDateFormData(pjesma.datumUnosaPjesme));
    }
    if(pjesma.datumEditovanja)
    {
      formData.append('datumEditovanja',formatDateFormData(pjesma.datumEditovanja));
    }
    formData.append('kategorija_id', String(pjesma.kategorija_id));
    

    

    return formData;
  }



}
