import { Carnet } from "./Carnet.model";
import { Utilisateur } from "./utilisateur.model";
import { Vaccin } from "./vaccin.model";

export interface Vaccination{
  id:number;
  age:String;
  dateVaccination:Date;
  observation:String;
  carnet:Carnet;
  vaccins:Vaccin;
  utilisateur:Utilisateur;
  }
