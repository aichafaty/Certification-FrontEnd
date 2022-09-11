import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }
   //curent user: which is loggedin
  public getCurrentUtilisateur(){
    return this.http.get(environment.bakendHost+'/current-user');
  }
    // gererate token
    public generateToken(handleRecupLogin: any){
      return this.http.post(environment.bakendHost+'/generate-token', handleRecupLogin);
    }

    //login user:set token in localStorage

    public loginUtilisateur(token: string){
      localStorage.setItem('token',token);
      return true;
    }
    //islogin :user il logged in or not
    public isLoggedIn(){
      let tokenStr=localStorage.getItem("token")
      if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
        return false;
      }else{
        return true;
      }
    }

    //logout:remove token from local storage
    public logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('utilisateur');
      return true;
    }

    //get token
    public getToken(){
      return localStorage.getItem('token');
    }

    //set userDEtail
    public setUtilisateur(utilisateur: any){
      localStorage.setItem('utilisateur',JSON.stringify(utilisateur));
    }
    //getUtilisateur

    public getUtilisateur(){
      let utilisateurStr=localStorage.getItem("utilisateur");
      if(utilisateurStr != null)
        {
          return JSON.parse(utilisateurStr)
        }else{
          this.logout();
          return null;
        }
    }

    //get user role

    public getUserRole(){
      let utilisateur=this.getUtilisateur();
      return utilisateur.authorities[0].authority;

    }

}
