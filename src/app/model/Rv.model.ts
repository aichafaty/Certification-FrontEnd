import { Carnet } from "./Carnet.model";
import { Utilisateur } from "./utilisateur.model";

export interface Rv{
  id:number;
  dateRv:Date;
  carnet:Carnet;
  utilisateur:Utilisateur;
}
