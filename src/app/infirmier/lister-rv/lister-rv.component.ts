import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Rv } from 'src/app/model/Rv.model';
import { CarnetService } from 'src/app/service/carnet.service';
import { RvService } from 'src/app/service/rv.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-lister-rv',
  templateUrl: './lister-rv.component.html',
  styleUrls: ['./lister-rv.component.css']
})
export class ListerRvComponent implements OnInit {
  utilisateur:any;
  rvs!:any;
  carnets!: any;
  rv =document.getElementById('content');
  closeResult = '';
  ajoutRvFormGroup!:FormGroup;

  constructor(private rvService:RvService, private fb: FormBuilder, private carnetService:CarnetService,private utilisateurService:UtilisateurService,private modalService: NgbModal, ) {
    this.getCarnet();
    this.getRv();
    this.getUtilisateur();
  }

  ngOnInit(): void {
    this.getCarnet();
    this.getRv();
    this.getUtilisateur();

    this.ajoutRvFormGroup=this.fb.group({
      dateRv:this.fb.control(null),
      carnet:this.fb.control(null),
      utilisateur:this.fb.control(null),
    })
  }


  open( rv:any) {
    this.modalService.open( rv, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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

  handleAjoutRv(){
    // this.utilisateur=this.ajoutVaccinFormGroup.value;
    console.log('les rendez vous',this.ajoutRvFormGroup);


    this.rvService.saveRv( this.ajoutRvFormGroup.value).
    subscribe({
      next:data=>{
        console.log("je test");
        console.log(data);
        console.log("form");

        console.log(this.ajoutRvFormGroup.value);


        alert("Rv ajouter avec successfully");
      },
    })
  }

}
