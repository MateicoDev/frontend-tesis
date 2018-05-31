import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @Models
import {Claim} from "../../models/claim.model";
//@Util
import { API_ENDPOINT } from "../../app/utils/const.util";

@Injectable()
export class ClaimsProvider {

  apiEndpoint = API_ENDPOINT+'/claims';

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

  getMessagesByClaimId(id: number) {
    return this.http.get(this.apiEndpoint+'/messages?id='+id);
  }

  postMessage(body: { claim:{ id: number }, id_partnership: number, id_user: number, comment: string}) {
    return this.http.post(this.apiEndpoint+"/messages", body);
  }

}
