import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IMutualiste } from 'src/app/models/mutualiste';
import { IPersonneAcharge } from 'src/app/models/personne-acharge';
import { PersonneAchargeService } from 'src/app/services/personne-acharge.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-personne-acharge',
  templateUrl: './add-personne-acharge.component.html',
  styleUrls: ['./add-personne-acharge.component.scss']
})
export class AddPersonneAchargeComponent {
    personneAcharges:IPersonneAcharge[] = [];
    personneAcharge:IPersonneAcharge = {};
    displayDialogue:boolean=false;
    mutualiste:IMutualiste = {};
    constructor(
        protected personneAchargeService: PersonneAchargeService,
         protected messageService: MessageService,
         public ref: DynamicDialogRef, public config: DynamicDialogConfig

    ){}


    ngOnInit(): void {
      this.mutualiste = this.config.data.mutualiste;
      if(this.mutualiste!==null){
        this.displayDialogue=true;
      }
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

        onSave(personneAcharge : IPersonneAcharge): void {
            console.log('mutualiste', this.mutualiste);

            personneAcharge.idAssure = this.mutualiste.idAssure;
            personneAcharge.idMutualiste = this.mutualiste.idMutualiste;
            console.log(personneAcharge);
            if (personneAcharge.idPac !== undefined) {
              this.personneAchargeService.updatePersonneAcharge(personneAcharge).subscribe(
                (resp: any)=>{
                  if(resp){
                    this.personneAcharge = {} as IPersonneAcharge;
                    this.successAlert();

                  }
                }
              );
            } else {
              this.personneAchargeService.createPersonneAcharge(personneAcharge).subscribe(
                (resp: any)=>{
                  if(resp){
                    this.personneAcharge = {} as IPersonneAcharge;
                    this.successAlert();
                  }
                }
              );
            }
          }
          successAlert() {
            this.messageService.add({severity:'success', summary:'Opération réussie!'});
          }


  close() {
    this.ref.close();
  }
  getPersonneAchargebyMutualiste(idMutualiste:number)
  {
    
  }

}
