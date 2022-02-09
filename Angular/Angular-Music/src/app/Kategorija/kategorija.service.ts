import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { kategorijaCreationDTO, KategorijaDTO } from './kategorija.model';

@Injectable({
  providedIn: 'root'
})
export class KategorijaService {

  constructor(private http: HttpClient) { }

  private apiURL=environment.apiURL+'/kategorije';
  
  getAll(): Observable<KategorijaDTO[]>
  {
    return this.http.get<KategorijaDTO[]>(this.apiURL);
  }




  create(zanr: kategorijaCreationDTO){
    return this.http.post(this.apiURL,zanr)
  }

}
