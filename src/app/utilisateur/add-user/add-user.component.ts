import { Component, OnInit } from '@angular/core'
import {Observable} from 'rxjs'
import { Validators } from '@angular/forms';
import { UtilisateurService } from '../../service/utilisateur.service';

import {FormGroup } from '@angular/forms';
import {FormBuilder} from "@angular/forms" ;
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  utilisateur !: Observable<any>;
  ajoutFormGroup!:FormGroup;
  constructor(private fb: FormBuilder,private utilisateurService: UtilisateurService) {}


  ngOnInit(): void {
    this.ajoutFormGroup=this.fb.group({
      nom:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      prenom:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      adresse:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      email:this.fb.control(null,[Validators.email,Validators.minLength(4)]),
      password:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      dateNaissance:this.fb.control(null),
      telephone:this.fb.control(null,[Validators.required,Validators.minLength(4)]),


    })


  }

  handleAjoutUtilisateur() {
    // this.utilisateur=this.ajoutFormGroup.value;
    if (this.ajoutFormGroup.invalid)return
    this.utilisateurService.saveUtilisateur( this.ajoutFormGroup.value).subscribe({
      next:data=>{
        alert("utilisateur ajouter avec successfully");
      },
        error:err=>{
            console.log(err);
        }
    })
  }
}
