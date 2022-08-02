import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../../service/utilisateur.service';
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators';
import {Utilisateur} from '../../model/utilisateur.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormGroup } from '@angular/forms';
import {FormBuilder} from "@angular/forms" ;



// import * as url from "url";

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.css']
})
export class ListeUserComponent implements OnInit {
  utilisateur !: Observable<any>;
  errorMessage!: string;
  rechercheformGroup !: FormGroup;

  constructor(private utilisateurService: UtilisateurService, private fb: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {
    this.rechercheformGroup = this.fb.group({
      keyword: this.fb.control("")
    });

    this.utilisateur = this.utilisateurService.getUtilisateur();

  }

  handleRechercheUtilisateur() {
    let kw = this.rechercheformGroup?.value.keyword;
    this.utilisateur = this.utilisateurService.rechercheUtilisateur(kw);
  }

  handleDeleteUtilisateur(u:number) {
    this.utilisateurService.deleteUtilisateur(u).subscribe(
      data=>{
        this.router.navigate(['/actualiser']);

    });

  }
}
