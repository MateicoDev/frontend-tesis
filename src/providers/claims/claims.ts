import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @Models
import {Claim} from "../../models/claim.model";

@Injectable()
export class ClaimsProvider {

  apiEndpoint = 'https://mateicodev.herokuapp.com/api/v1/claims';

  constructor(public http: HttpClient) {
  }

  getCurrentClaims() {
    const params = new HttpParams();
    params.append('page', '1');
    params.append('per_page', '10000');
    return this.http.get(this.apiEndpoint, { params });
  }

  sendClaim(claim: Claim) {
    return this.http.post(this.apiEndpoint, claim);
  }

}
