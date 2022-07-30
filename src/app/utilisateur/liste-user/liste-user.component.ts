import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import * as url from "url";

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
     utilisateur:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8083/utilisateur").subscribe(data=>{
      this.utilisateur=data;
    },error =>{
      console.log(error);
    })
  }

}
