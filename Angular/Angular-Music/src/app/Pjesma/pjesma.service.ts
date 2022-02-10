import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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


  create(pjesma: pjesmaCreationDTO){
    return this.http.post(this.apiURL,pjesma)
  }

  edit(id:number,urediPjesmu:any)
  {
    return this.http.put((`${this.apiURL}/${id}`),urediPjesmu);
  }
}
