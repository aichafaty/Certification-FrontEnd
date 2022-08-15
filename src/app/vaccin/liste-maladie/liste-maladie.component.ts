import { Component, OnInit } from '@angular/core';
import { MaladieService } from '../../service/maladie.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

import {Maladie} from '../../model/maladie.model';

import {Observable} from 'rxjs'
// import { map } from 'rxjs/operators';

import {FormGroup } from '@angular/forms';
import {FormBuilder} from "@angular/forms" ;
@Component({
  selector: 'app-liste-maladie',
  templateUrl: './liste-maladie.component.html',
  styleUrls: ['./liste-maladie.component.css']
})
export class ListeMaladieComponent implements OnInit {
  maladies :any ;
  errorMessage!: string;
  constructor(private maladieService: MaladieService,private fb: FormBuilder,private router:Router) {
    this.getMaladies();
    console.log(this.maladies);


  }

  ngOnInit(): void {
    this.maladies = this.maladieService.getMaladies();
  }

  getMaladies(){
    this.maladieService.getMaladies().subscribe(data=>{
      this.maladies=data;
    })
  }

  handleDeleteMaladie(m:number){
    this.maladieService.deleteMaladie(m).subscribe(
      data=>{
        this.router.navigate(['/actualiser']);
        console.log(m);


    });
  }



}
