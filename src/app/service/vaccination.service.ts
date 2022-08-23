import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vaccination } from '../model/Vaccination.model';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private http:HttpClient) { }
  public getVaccination():Observable<Vaccination[]>{
    return this.http.get<Vaccination[]>(environment.bakendHost+"/vaccinations")
  }
  public rechercheVaccination(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/vaccination/reckerche?keyword="+keyword)
  }

  public saveVaccination(vaccination:VaccinationService):Observable<Vaccination>{
    return this.http.post<Vaccination>(environment.bakendHost+"/vaccination" ,vaccination);
  }

  public deleteVaccination(id:number):Observable<Vaccination>{
    return this.http.delete<Vaccination>(environment.bakendHost+"/vaccination/"+id);
  }

}
