import { Utilisateur } from "./utilisateur.model";

export interface Notification{
  id:number;
  frequence:number;
  sms:String;
  utilisateur:Utilisateur;

}
