import { Utilisateur } from "./utilisateur.model";

export interface Carnet{
  id:number;
  numeroCarnet:String;
  prenomEnfant:String;
  nomEnfant:String;
  dateNaissance:Date;
  lieuNaiss:String
  poids:String;
  sexe:String;
  antecedent:String;
  taille:String;
  utilisateur:Utilisateur;
}
