import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IPersonneAcharge } from 'src/app/models/personne-acharge';
import { PersonneAchargeService } from 'src/app/services/personne-acharge.service';

@Component({
  selector: 'app-personne-acharge',
  templateUrl: './personne-acharge.component.html',
 // styleUrl: './personne-acharge.component.scss'
})
export class PersonneAchargeComponent implements OnInit {

  personneAcharges:IPersonneAcharge[] = [];
  personneAcharge:IPersonneAcharge = {};
  displayDialogue:boolean=false;
  

  constructor(
    protected personneAchargeService: PersonneAchargeService,
     protected messageService: MessageService,

){}
    ngOnInit(): void {

    }


onGetAllPersonneAcharge(): void {
  this.personneAchargeService.getAllPersonneAcharge().subscribe((res: HttpResponse<IPersonneAcharge[]>) => {
    const data = res.body || [];
    this.personneAcharges = data;
  });
}


onDeletePersonneAcharge(personneAcharge : IPersonneAcharge): void {
    if(personneAcharge!==null && personneAcharge.idPac)
    {
        this.personneAchargeService.deletePersonneAcharge(personneAcharge.idPac).subscribe(
            resp => {
              if(resp){
                this.successAlert();
                this.onGetAllPersonneAcharge();
              }
            }
          );
    }

  }


 onGetOnePersonneAcharge(personneAcharge : IPersonneAcharge): void {
    if(personneAcharge !==null && personneAcharge.idPac)
    {
        this.personneAchargeService.getPersonneAcharge(personneAcharge.idPac).subscribe(
            resp => {
              if(resp){
                this.personneAcharge = resp.body as IPersonneAcharge;
              }
            }
          );
    }

  }



successAlert() {
  this.messageService.add({severity:'success', summary:'Opération réussie!'});
}


onSave(personneAcharge : IPersonneAcharge): void {
  if (personneAcharge.idPac !== undefined) {
    this.personneAchargeService.updatePersonneAcharge(personneAcharge).subscribe(
      (resp: any)=>{
        if(resp){
          this.personneAcharge = {} as IPersonneAcharge;
          this.successAlert();
          this.onGetAllPersonneAcharge();
        }
      }
    );
  } else {
    this.personneAchargeService.createPersonneAcharge(personneAcharge).subscribe(
      (resp: any)=>{
        if(resp){
          this.personneAcharge = {} as IPersonneAcharge;
          this.successAlert();
          this.onGetAllPersonneAcharge();
        }
      }
    );
  }
}
onDisplayDialogue(personneAcharge: IPersonneAcharge) :void{
    this.personneAcharge=personneAcharge;

    this.displayDialogue=true;
}


onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
    }
    onAddPerson() {
    throw new Error('Method not implemented.');
    }

    onHidenDialogue() :void{

        this.displayDialogue=false;

        //vide les champs du formulaire
        this.personneAcharge = {};
    }
}
