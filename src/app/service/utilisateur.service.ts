import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Utilisateur } from '../model/utilisateur.model';
import {Observable} from "rxjs";
import { AddUserComponent } from '../utilisateur/add-user/add-user.component';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  public getUtilisateur():Observable<any>{
    return this.http.get(environment.bakendHost+"/utilisateur")
  }
  public rechercheUtilisateur(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/utilisateur/reckerche?keyword="+keyword)
  }

  public saveUtilisateur(utilisateur:UtilisateurService):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(environment.bakendHost+"/utilisateur" ,utilisateur);
  }

  public deleteUtilisateur(id:number):Observable<Utilisateur>{
    return this.http.delete<Utilisateur>(environment.bakendHost+"/utilisateur/"+id);
  }
}
