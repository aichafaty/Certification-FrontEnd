import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginData={
  //   username: '',
  //   password: ''
  // };
  recupFormGroup !: FormGroup;


  constructor(private fb: FormBuilder, private route:Router,private login:LoginService) { }

  ngOnInit(): void {
    this.recupFormGroup=this.fb.group({
      username:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      password:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
    })

  }


  handleRecupLogin(){

    if (this.recupFormGroup.value.username =="" ){

      //  this.route.navigate(['/parent'])
      Swal.fire({
        title: 'Error!',
        text: 'Veuillez remplir tous les champs',
        icon: 'error',
      });

    }
    if (this.recupFormGroup.value.password =="" ){

      //  this.route.navigate(['/parent'])
      Swal.fire({
        title: 'Error!',
        text: 'Veuillez remplir tous les champs',
        icon: 'error',
      });

    }

    // si des identifiants sont entres
    if (this.recupFormGroup.value.username!= '' && this.recupFormGroup.value.password!=''){
      this.login.generateToken({username:this.recupFormGroup.value.username,password:this.recupFormGroup.value.password}).subscribe(
        (data:any)=>{
          console.log("success");
          console.log(data);
         //login
          this.login.loginUtilisateur(data.token);

          this.login.getCurrentUtilisateur().subscribe(
            (utilisateur:any)=>{
              this.login.setUtilisateur(utilisateur);
              console.log(utilisateur);
              //redirection Admin,infirmier,parent
              if(this.login.getUserRole()=='Admin'){
                window.location.href='/menu';

              }else if(this.login.getUserRole()=='Infirmier'){
                window.location.href='/infirmier';
              }else if(this.login.getUserRole()=='Parent'){
                window.location.href='/parent';
              }else{
                  this.login.logout();
              }

            }
          )



        },
        (error)=>{
          console.log("error");
          console.log(error);


        });
    }

  //   if (this.recupFormGroup.value.user=="infirmier" && this.recupFormGroup.value.password =="passer" ){
  //     this.route.navigate(['/infirmier'])

  //  }
  //  if (this.recupFormGroup.value.user=="admin" && this.recupFormGroup.value.password =="passer" ){
  //   this.route.navigate(['/vaccinListe'])

 }
  }


