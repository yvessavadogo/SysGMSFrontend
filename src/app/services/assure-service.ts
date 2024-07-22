import { Injectable } from '@angular/core';
import { IAssure } from '../models/assure';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

export type EntityResponseType = HttpResponse<IAssure>;
export type EntityArrayResponseType = HttpResponse<IAssure[]>;

@Injectable({
  providedIn: 'root'
})
export class AssureService {

  public resourceUrl = environment.api + 'assures';

  constructor(protected http: HttpClient) {}

  getAllAssures(): Observable<EntityArrayResponseType> {
    return this.http.get<IAssure[]>(this.resourceUrl, { observe: 'response' });
  }

  createAssure(assure: IAssure): Observable<EntityResponseType> {

    return this.http.post<IAssure>(this.resourceUrl, assure, { observe: 'response' });

  }

  updateAssure(assure: IAssure): Observable<EntityResponseType> {
    return this.http.put<IAssure>( this.resourceUrl, assure, { observe: 'response' }
    );
  }

  getAssure(idAssure: number): Observable<EntityResponseType> {

    return this.http.get<IAssure> (this.resourceUrl + '/' + idAssure,  { observe: 'response' });
  }

  deleteAssure(idAssure: number): Observable<HttpResponse<{}>> {
    return this.http.delete<IAssure> (this.resourceUrl + '/' + idAssure,  { observe: 'response' });

  }

}

