import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Vaccination } from 'src/app/model/Vaccination.model';
import { CarnetService } from 'src/app/service/carnet.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { VaccinService } from 'src/app/service/vaccin.service';
import { VaccinationService } from 'src/app/service/vaccination.service';

@Component({
  selector: 'app-lister-vaccination',
  templateUrl: './lister-vaccination.component.html',
  styleUrls: ['./lister-vaccination.component.css']
})
export class ListerVaccinationComponent implements OnInit {
  vaccinations!:Vaccination[];
  utilisateur:any;
  vaccins:any;
  carnets:any;
  va =document.getElementById('content');
  closeResult = '';
  ajoutVaccinationFormGroup!:FormGroup;


  constructor(private vaccinationService: VaccinationService,private vaccinService:VaccinService, private fb: FormBuilder,private carnetService: CarnetService,private utilisateurService:UtilisateurService,private modalService: NgbModal  ) {
    this.getCarnet();
    this.getVaccination();
    this.getUtilisateur();
    this.getVaccins();
  }

  ngOnInit(): void {
    this.getCarnet();
    this.getVaccination();
    this.getUtilisateur();
    this.getVaccins();

    this.ajoutVaccinationFormGroup=this.fb.group({
      carnet:this.fb.control(null),
      age:this.fb.control(null),
      utilisateur:this.fb.control(null),
      observation:this.fb.control(null),
      vaccins:this.fb.control(null),
      dateVaccination:this.fb.control(null),




    })


  }
  getVaccination(){
    this.vaccinationService.getVaccination().
    subscribe({
      next:data=>{
        this.vaccinations=data;
        console.log('les vaccins',this.vaccinations);


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
  getVaccins(){
    this.vaccinService.getVaccin().subscribe(data=>{
      this.vaccins=data;
      console.log(this.vaccins);
    })
    }

  open(va:any) {
    this.modalService.open(va, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
  handleAjoutVaccination(){
    // this.utilisateur=this.ajoutVaccinFormGroup.value;

    this.vaccinationService.saveVaccination( this.ajoutVaccinationFormGroup.value).
    subscribe({
      next:data=>{
        console.log("je test");
        console.log(data);
        console.log("form");

        console.log(this.ajoutVaccinationFormGroup.value);


        alert("vaccinanation ajouter avec successfully");
      },
    })
  }



}
