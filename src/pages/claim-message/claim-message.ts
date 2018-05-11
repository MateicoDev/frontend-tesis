import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-claim-message',
  templateUrl: 'claim-message.html',
})
export class ClaimMessagePage {
  claim: any;
  response = '';

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.claim = this.navParams.data.claim;
  }

  sendResponse() {
    this.response = '';
  }
}
