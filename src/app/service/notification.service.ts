import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient) { }

  public getNotifications():Observable<any>{
    return this.http.get(environment.bakendHost+"/notifications")
  }
  public rechercheNotification(keyword:String):Observable<any>{
    return this.http.get(environment.bakendHost+"/notification/reckerche?keyword="+keyword)
  }

  public saveNotification(notification:NotificationService):Observable<Notification>{
    return this.http.post<Notification>(environment.bakendHost+"/notification" ,notification);
  }

  public deleteNotification(id:number):Observable<Notification>{
    return this.http.delete<Notification>(environment.bakendHost+"/notifications/"+id);
  }
}
