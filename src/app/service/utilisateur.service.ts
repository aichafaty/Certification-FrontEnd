import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";

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
}
