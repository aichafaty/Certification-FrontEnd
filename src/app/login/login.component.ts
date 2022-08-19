import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recupFormGroup !: FormGroup;

  constructor(private fb: FormBuilder, private route:Router) { }

  ngOnInit(): void {
    this.recupFormGroup=this.fb.group({
      user:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      password:this.fb.control(null,[Validators.required,Validators.minLength(4)]),



    })
  }

  handleRecupLogin(){
    if (this.recupFormGroup.value.user=="parent" && this.recupFormGroup.value.password =="passer" ){
       this.route.navigate(['/parent'])

    }
    if (this.recupFormGroup.value.user=="infirmier" && this.recupFormGroup.value.password =="passer" ){
      this.route.navigate(['/infirmier'])

   }
   if (this.recupFormGroup.value.user=="admin" && this.recupFormGroup.value.password =="passer" ){
    this.route.navigate(['/vaccinListe'])

 }
  }

}
