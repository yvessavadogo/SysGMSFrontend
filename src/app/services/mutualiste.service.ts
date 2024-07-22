import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMutualiste } from '../models/mutualiste';

export type EntityResponseType = HttpResponse<IMutualiste>;
export type EntityArrayResponseType = HttpResponse<IMutualiste[]>;

@Injectable({
  providedIn: 'root'
})
export class MutualisteService {

  public resourceUrl = environment.api + 'mutualistes';

  constructor(protected http: HttpClient) { }


  getAllMutualiste(): Observable<EntityArrayResponseType> {
    return this.http.get<IMutualiste[]>(this.resourceUrl, { observe: 'response' });
  }

  createMutualiste(mutualiste: IMutualiste): Observable<EntityResponseType> {

    return this.http.post<IMutualiste>(this.resourceUrl, mutualiste, { observe: 'response' });

  }

  updateMutualiste(mutualiste: IMutualiste, idMutualiste: number): Observable<EntityResponseType> {
    return this.http.put<IMutualiste>( this.resourceUrl + '/' + idMutualiste, mutualiste, { observe: 'response' }
    );
  }

  getMutualiste(idMutualiste: number): Observable<EntityResponseType> {

    return this.http.get<IMutualiste> (this.resourceUrl + '/' + idMutualiste,  { observe: 'response' });
  }

  deleteMutualiste(id: number): Observable<HttpResponse<{}>> {
    console.log('id',id);
    return this.http.delete<IMutualiste> (this.resourceUrl + '/' + id,  { observe: 'response' });

  }

}
