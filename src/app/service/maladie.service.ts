import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Maladie } from '../model/maladie.model';

@Injectable({
  providedIn: 'root'
})
export class MaladieService {

  constructor(private http:HttpClient) { }

  public getMaladies():Observable<any>{
    return this.http.get(environment.bakendHost+"/maladies")
  }
  public rechercheMaladie(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/maladie/reckerche?keyword="+keyword)
  }

  public saveMaladie(maladie:MaladieService):Observable<Maladie>{
    return this.http.post<Maladie>(environment.bakendHost+"/maladies" ,maladie);
  }

  public deleteMaladie(id:number):Observable<Maladie>{
    return this.http.delete<Maladie>(environment.bakendHost+"/maladies/"+id);
  }
}
