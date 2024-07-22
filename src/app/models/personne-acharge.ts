import { IAssure } from "./assure";
import { IMutualiste } from "./mutualiste";

export interface IPersonneAcharge extends IAssure{
  idPac?:number;
  idMutualiste?:number;
  mutualiste?:IMutualiste;
  affiliationPAC?:String;
  documentAffiliationPCA?:any;
  certificatScolarite?:any;
}
