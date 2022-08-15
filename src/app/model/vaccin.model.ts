import { Maladie } from "./maladie.model";
import { Utilisateur } from "./utilisateur.model";

export interface Vaccin{
  id:number;
  nomVaccin:String;
  age:String;
  effetSecondaire:String;
  maladies:Maladie;
  utilisateur:Utilisateur;
  }
