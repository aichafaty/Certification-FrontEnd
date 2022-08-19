import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CarnetService } from 'src/app/service/carnet.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-lister-carnet',
  templateUrl: './lister-carnet.component.html',
  styleUrls: ['./lister-carnet.component.css']
})
export class ListerCarnetComponent implements OnInit {
  carnets!: Observable<any>;
  utilisateur:any;
  s =document.getElementById('content');
  closeResult = '';
  ajoutCarnetFormGroup!:FormGroup;



  constructor(private fb: FormBuilder,private carnetService: CarnetService,private utilisateurService:UtilisateurService,private modalService: NgbModal) {
    this.carnets;

   }

  ngOnInit(): void {
    this.carnets = this.carnetService.getCarnets();

    console.log(this.carnets);
    this.getUtilisateur();
    console.log(this.utilisateur);

    this.ajoutCarnetFormGroup=this.fb.group({
      numeroCarnet:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      prenomEnfant:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      nomEnfant:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      lieuNaiss:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      poids:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      sexe:this.fb.control(null,[Validators.required,Validators.minLength(1)]),
      antecedent:this.fb.control(null,[Validators.required,Validators.minLength(4)]),
      taille:this.fb.control(null,[Validators.required,Validators.minLength(2)]),
      dateNaissance:this.fb.control([Validators.required]),
      utilisateur:this.fb.control([Validators.required]),
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

  open(s:any) {
    this.modalService.open(s, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  handleAjoutCarnet(){
    // this.utilisateur=this.ajoutVaccinFormGroup.value;

    this.carnetService.saveCarnet( this.ajoutCarnetFormGroup.value).
    subscribe({
      next:data=>{
        console.log("je test");
        console.log(data);
        console.log("form");

        console.log(this.ajoutCarnetFormGroup.value);


        alert("vaccin ajouter avec successfully");
      },
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


