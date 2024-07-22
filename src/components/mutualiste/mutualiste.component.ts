import { PersonneAchargeService } from 'src/app/services/personne-acharge.service';
import { AssureService } from './../../app/services/assure-service';
import { MutualisteService } from './../../app/services/mutualiste.service';
import { IMutualiste } from './../../app/models/mutualiste';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import {ConfirmationService, MessageService} from "primeng/api";
import { Table } from 'primeng/table';
import { mockMutualistes } from '../mockup/mockmutualiste';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { AddPersonneAchargeComponent } from '../personne-acharge/add-personne-acharge/add-personne-acharge.component';
import { IPersonneAcharge } from 'src/app/models/personne-acharge';

@Component({
  selector: 'app-mutualiste',

  templateUrl: './mutualiste.component.html',
 // styleUrl: './mutualiste.component.scss'
})
export class MutualisteComponent implements OnInit {

  mutualistes:IMutualiste[] = [];
  personnesAChargeByMutualiste:any;
  mutualiste:IMutualiste = {};
  displayDialogue:boolean=false;
  @ViewChild('dt') table: Table  | any;
  @ViewChild('filter') filter: ElementRef | any;

  constructor(
    protected mutualisteService: MutualisteService,
     protected messageService: MessageService,
     private dialogService: DialogService,
     private personneAchargeService: PersonneAchargeService

){}

ngOnInit(): void {

    this.onGetAllMutualiste();

}

onGetAllMutualiste(): void {
  this.mutualisteService.getAllMutualiste().subscribe((res: HttpResponse<IMutualiste[]>) => {
    const data = res.body || [];
    this.mutualistes = data;
    console.log(this.mutualistes);
  });
}


onDeleteMutualiste(mutualiste : IMutualiste): void {
    console.log('mutualiste',mutualiste);
if (mutualiste !== null && mutualiste.idMutualiste){
    console.log('mutualiste',mutualiste);
    this.mutualisteService.deleteMutualiste(mutualiste.idMutualiste).subscribe(
        resp => {
          if(resp){
            this.successAlert();
            this.onGetAllMutualiste();
          }
        }
      );
}


  }


 onGetOneMutualiste(mutualiste : IMutualiste): void {
    if(mutualiste && mutualiste.idMutualiste){
        this.mutualisteService.getMutualiste(mutualiste.idMutualiste).subscribe(
            resp => {
              if(resp){
                this.mutualiste = resp.body as IMutualiste;
              }
            }
          );
    }

  }



successAlert() {
  this.messageService.add({severity:'success', summary:'Opération réussie!'});
}


onSave(mutualiste : IMutualiste): void {

    console.log('mutualiste', mutualiste);

  if (mutualiste.idMutualiste !== undefined) {
    this.mutualisteService.updateMutualiste(mutualiste, mutualiste.idMutualiste).subscribe(
      (resp: any)=>{
        if(resp){
          this.mutualiste = {} as IMutualiste;
          this.successAlert();
          this.onGetAllMutualiste();
        }
      }
    );
  } else {
    this.mutualisteService.createMutualiste(mutualiste).subscribe(
      (resp: any)=>{
        if(resp){
          this.mutualiste = {} as IMutualiste;
          this.successAlert();
          this.onGetAllMutualiste();
        }
      }
    );
  }
}

onHidenDialogue() :void{

    this.displayDialogue=false;

    //vide les champs du formulaire
    this.mutualiste = {};
}
onDisplayDialogue(mutualiste: IMutualiste) :void{
    this.mutualiste=mutualiste;

    this.displayDialogue=true;
}

onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
    }
    onAddPerson() {
    throw new Error('Method not implemented.');
    }

    onAddPersonneCharge(mutualiste: IMutualiste) {
        const ref: DynamicDialogRef = this.dialogService.open(AddPersonneAchargeComponent, {
          header: "Ajout d'une personne en charge au mutualiste: " + mutualiste.prenomAssure + mutualiste.nomAssure ,
          data: {
            mutualiste: mutualiste
          },
          width: '40%'
        });
      }

      getPersonneAchargeByMutualiste(mutualiste:IMutualiste){

        if(mutualiste && mutualiste.idMutualiste) {

            this.mutualiste = mutualiste;
            this.personneAchargeService.personneAchargeByMutualiste(mutualiste.idMutualiste).subscribe(
                res => {
                    this.personnesAChargeByMutualiste = res.body;
                    console.log(' this.personnesAChargeByMutualiste',  this.personnesAChargeByMutualiste);
                }
            );
        }


      }
}
