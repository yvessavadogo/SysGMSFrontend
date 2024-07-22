import { Injectable } from '@angular/core';
import { IPersonneAcharge } from '../models/personne-acharge';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export type EntityResponseType = HttpResponse<IPersonneAcharge>;
export type EntityArrayResponseType = HttpResponse<IPersonneAcharge[]>;

@Injectable({
  providedIn: 'root'
})
export class PersonneAchargeService {

  public resourceUrl = environment.api + 'personnesacharge';

  constructor(protected http: HttpClient) { }


  getAllPersonneAcharge(): Observable<EntityArrayResponseType> {
    return this.http.get<IPersonneAcharge[]>(this.resourceUrl, { observe: 'response' });
  }

  createPersonneAcharge(personneAcharge: IPersonneAcharge): Observable<EntityResponseType> {

    return this.http.post<IPersonneAcharge>(this.resourceUrl, personneAcharge, { observe: 'response' });

  }

  updatePersonneAcharge(personneAcharge: IPersonneAcharge): Observable<EntityResponseType> {
    return this.http.put<IPersonneAcharge>( this.resourceUrl, personneAcharge, { observe: 'response' }
    );
  }

  getPersonneAcharge(idpersonneAcharge: number): Observable<EntityResponseType> {

    return this.http.get<IPersonneAcharge> (this.resourceUrl + '/' + idpersonneAcharge,  { observe: 'response' });
  }

  deletePersonneAcharge(idpersonneAcharge: number): Observable<HttpResponse<{}>> {
    return this.http.delete<IPersonneAcharge> (this.resourceUrl + '/' + idpersonneAcharge,  { observe: 'response' });

  }
  personneAchargeByMutualiste(idMutualiste: number): Observable<EntityArrayResponseType> {
    return this.http.get<IPersonneAcharge[]> (this.resourceUrl + '/' + idMutualiste,  { observe: 'response' });
  }

  createPersonneAcharges(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.resourceUrl}/personneAcharge`, formData);
  }
}
