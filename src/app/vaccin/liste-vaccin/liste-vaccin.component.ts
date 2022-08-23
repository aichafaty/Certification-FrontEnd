import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { VaccinService } from 'src/app/service/vaccin.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { MaladieService } from 'src/app/service/maladie.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-vaccin',
  templateUrl: './liste-vaccin.component.html',
  styleUrls: ['./liste-vaccin.component.css']
})
export class ListeVaccinComponent implements OnInit {
 public vaccins : any;
 closeResult = '';
 ajoutVaccinFormGroup!:FormGroup;
 maladies:any;
 utilisateur:any;
  c =document.getElementById('content');
  constructor(private vaccinService:VaccinService,private fb: FormBuilder,private modalService: NgbModal,private maladieService:MaladieService,private utilisateurService:UtilisateurService ) {
    this.getVaccins();
    this.getMaladies();
    this.getUtilisateur();


   }

  ngOnInit(): void {
    this.getVaccins();
    this.getMaladies();
    console.log(this.maladies);
    this.getUtilisateur();
    // console.log(this.vaccins);

    this.ajoutVaccinFormGroup=this.fb.group({
      nomVaccin:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
      age:this.fb.control(null,[Validators.required,Validators.minLength(5)]),
      effetSecondaire:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      maladies:this.fb.control([Validators.required]),
      utilisateur:this.fb.control([Validators.required]),
  })

  }

  getVaccins(){
    this.vaccinService.getVaccin().subscribe(data=>{
      this.vaccins=data;
      console.log(this.vaccins);
    })
    }

    open(c:any) {
      this.modalService.open(c, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    handleAjoutVaccin(){
      // this.utilisateur=this.ajoutVaccinFormGroup.value;


      if (this.ajoutVaccinFormGroup.invalid) return
      this.vaccinService.saveVaccin( this.ajoutVaccinFormGroup.value).
      subscribe({
        next:data=>{
          console.log("je test");
          console.log(data);
          console.log("form");

          console.log(this.ajoutVaccinFormGroup.value);


          alert("vaccin ajouter avec successfully");
        },
      })
    }

getMaladies(){
  this.maladieService.getMaladies().
  subscribe({
    next:data=>{
      this.maladies=data;

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
  },
  error:err=>{
    console.log(err);
  }

  })
}


}
