import { HttpClient } from '@angular/common/http';
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

  getCurrentClaims(options: { type: string, id: number }) {
    let option = 'id_user_sender';
    if(options && options.type === 'recieved') {
      option = 'id_user_reciver';
    }
    return this.http.get(this.apiEndpoint+`?page=1&per_page=10000&${option}=${options.id}`);
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
