import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs'
import { Validators } from '@angular/forms';
import { MaladieService } from 'src/app/service/maladie.service';

import {FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ajout-maladie',
  templateUrl: './ajout-maladie.component.html',
  styleUrls: ['./ajout-maladie.component.css']
})
export class AjoutMaladieComponent implements OnInit {

  maladie !: Observable<any>;
  ajoutMaladieFormGroup!:FormGroup;

  constructor(private fb: FormBuilder,private maladieService: MaladieService) { }

  ngOnInit(): void {
    this.ajoutMaladieFormGroup=this.fb.group({
      nomMaladie:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
      description:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
  })



}
handleAjoutMaladie() {
  // this.utilisateur=this.ajoutFormGroup.value;
  if (this.ajoutMaladieFormGroup.invalid) return
  this.maladieService.saveMaladie( this.ajoutMaladieFormGroup.value).subscribe({
    next:data=>{
      alert("maladie ajouter avec successfully");
    },
      error:err=>{
          console.log(err);
      }
  })
}
}
