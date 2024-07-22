import { IAssure } from 'src/app/models/assure';
import { AssureService } from './../../app/services/assure-service';
import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-assure',
  templateUrl: './assure.component.html',
 // styleUrl: './assure.component.scss',
})
export class AssureComponent implements OnInit {

  assures:IAssure[] = [];
  assure!:IAssure;

  constructor(
             protected assureService: AssureService,
              protected messageService: MessageService,

   ){}

   ngOnInit(): void {
    this.onGetAllAssures();

   }

onGetAllAssures(): void {
    this.assureService.getAllAssures().subscribe((res: HttpResponse<IAssure[]>) => {
      const data = res.body || [];
      this.assures = data;
    });
  }

  onDisplayDialogue(assure:IAssure):void{

  }

  onDeleteAssure(assure : IAssure): void {
    if(assure && assure.idAssure)
    {
        this.assureService.deleteAssure(assure.idAssure).subscribe(
            resp => {
              if(resp){
                this.successAlert();
                this.onGetAllAssures();
              }
            }
          );
    }

    }


   onGetOneAssure(assure : IAssure): void {
    if (assure && assure.idAssure)
    this.assureService.getAssure(assure.idAssure).subscribe(
      resp => {
        if(resp){
          this.assure = resp.body as IAssure;
        }
      }
    );
    }



  successAlert() {
    this.messageService.add({severity:'success', summary:'Opération réussie!'});
  }


  onSave(assure : IAssure): void {
    if (assure.idAssure !== undefined) {
      this.assureService.updateAssure(assure).subscribe(
        (resp: any)=>{
          if(resp){
            this.assure = {} as IAssure;
            this.successAlert();
            this.onGetAllAssures();
          }
        }
      );
    } else {
      this.assureService.createAssure(assure).subscribe(
        (resp: any)=>{
          if(resp){
            this.assure = {} as IAssure;
            this.successAlert();
            this.onGetAllAssures();
          }
        }
      );
    }
  }

}
