
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Carnet } from '../model/Carnet.model';

@Injectable({
  providedIn: 'root'
})
export class CarnetService {

  constructor(private http:HttpClient) { }
  public getCarnets():Observable<any>{
    return this.http.get(environment.bakendHost+"/carnets")
  }
  public rechercheCarnet(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/carnet/reckerche?keyword="+keyword)
  }

  public saveCarnet(carnet:CarnetService):Observable<Carnet>{
    return this.http.post<Carnet>(environment.bakendHost+"/carnet" ,carnet);
  }

  public deleteCarnet(id:number):Observable<Carnet>{
    return this.http.delete<Carnet>(environment.bakendHost+"/carnet/"+id);
  }
}
