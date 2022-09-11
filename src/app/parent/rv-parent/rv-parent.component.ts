import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CarnetService } from 'src/app/service/carnet.service';
import { RvService } from 'src/app/service/rv.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-rv-parent',
  templateUrl: './rv-parent.component.html',
  styleUrls: ['./rv-parent.component.css']
})
export class RvParentComponent implements OnInit {
  utilisateur:any;
  rvs!:any;
  carnets!: any;

  constructor(private rvService:RvService, private fb: FormBuilder, private carnetService:CarnetService,private utilisateurService:UtilisateurService) {
    this.getRv();
    this.getCarnet();
    this.getUtilisateur();
   }

  ngOnInit(): void {
    this.getRv();
    this.getCarnet();
    this.getUtilisateur();
  }
  getRv(){
    this.rvService.getRv().
    subscribe({
      next:data=>{
        this.rvs=data;

      },
      error:err=>{
        console.log(err);

      }
    })
  }
  getCarnet(){
    this.carnetService.getCarnets().
    subscribe({
      next:data=>{
        this.carnets=data;

      },
      error:err=>{
        console.log(err);

      }
    })
  }
  getUtilisateur(){
    this.utilisateurService.getUtilisateur().
    subscribe({
    next:data=>{
      this.utilisateur=data;
      console.log(this.utilisateur);

    },
    error:err=>{
      console.log(err);
    }

    })
  }

}
