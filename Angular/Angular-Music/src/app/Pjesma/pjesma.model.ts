
import { KategorijaDTO } from "../Kategorija/kategorija.model";

export interface pjesmaCreationDTO{
   
    Naziv: string;
    NazivIzvodjaca:string;
    Url:string;
    Ocjena:number;
    Favorit:boolean;
    DatumUnosaPjesme:Date;
    DatumEditovanja:Date;
    Kategorija: number[];

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
    Kategorija: KategorijaDTO[];
}