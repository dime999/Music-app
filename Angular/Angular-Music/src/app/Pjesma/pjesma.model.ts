
import { KategorijaDTO } from "../Kategorija/kategorija.model";

export interface pjesmaCreationDTO{
   
    naziv: string;
    nazivIzvodjaca:string;
    url:string;
    ocjena:number;
    favorit:boolean;
    datumUnosaPjesme:Date;
    datumEditovanja:Date;
    kategorija_id: number;

}

export interface pjesmaDTO{
    id:number;
    Naziv: string;
    NazivIzvodjaca:string;
    Url:string;
    Ocjena:number;
    Favorit:boolean;
    DatumUnosaPjesme:Date;
    DatumEditovanja:Date;
    Kategorija: KategorijaDTO;
}