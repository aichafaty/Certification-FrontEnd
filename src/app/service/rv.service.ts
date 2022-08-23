import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rv } from '../model/Rv.model';

@Injectable({
  providedIn: 'root'
})
export class RvService {

  constructor(private http:HttpClient) { }

  public getRv():Observable<Rv[]>{
    return this.http.get<Rv[]>(environment.bakendHost+"/rvs")
  }
  public rechercheRv(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/rv/reckerche?keyword="+keyword)
  }

  public saveRv(rv:RvService):Observable<Rv>{
    return this.http.post<Rv>(environment.bakendHost+"/rv" ,rv);
  }

  public deleteRv(id:number):Observable<Rv>{
    return this.http.delete<Rv>(environment.bakendHost+"/rv/"+id);
  }
}
