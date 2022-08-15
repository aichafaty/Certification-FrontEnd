import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vaccin } from '../model/vaccin.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinService {

  constructor(private http:HttpClient) { }

  public getVaccin():Observable<Vaccin[]>{
    return this.http.get<Vaccin[]>(environment.bakendHost+"/vaccins")
  }
  public rechercheVaccin(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/vaccin/reckerche?keyword="+keyword)
  }

  public saveVaccin(vaccin:VaccinService):Observable<Vaccin>{
    return this.http.post<Vaccin>(environment.bakendHost+"/vaccin" ,vaccin);
  }

  public deleteVaccin(id:number):Observable<Vaccin>{
    return this.http.delete<Vaccin>(environment.bakendHost+"/vaccins/"+id);
  }
}
