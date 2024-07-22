import { IAssure } from "./assure";

export interface IMutualiste extends IAssure {

  idMutualiste?:number;
  matriculeMutualiste? :String;
  categorieMutualiste?: String;
  serviceMutualiste?:String;
  fonctionMutualiste?: String;
  depensesSante?:number;
  documentMutualiste?:Blob;
}
