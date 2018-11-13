import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ClaimsProvider } from "../../providers/claims/claims";

@IonicPage()
@Component({
  selector: 'page-claim-message',
  templateUrl: 'claim-message.html',
})
export class ClaimMessagePage {
  claim: any;
  response = '';
  messages = [];
  userId = 1;

  constructor(public navParams: NavParams,
              private claimPrv: ClaimsProvider) {
  }

  ngOnInit() {
    this.claim = this.navParams.data.claim;
    this.claimPrv.getMessagesByClaimId(this.claim.id).subscribe((res: any) => {
      this.messages = res.claim_messages.items;
    });
  }

  sendResponse() {
    const response = {
      claim: {
        id: this.claim.id
      },
      id_partnership: this.claim.id_partnership || 1,
      id_user: this.userId,
      comment: this.response,
    };
    this.claimPrv.postMessage(response).subscribe((res: any) => {
      this.messages.push(res.claim_messages);
      this.response = '';
    });
  }
}
