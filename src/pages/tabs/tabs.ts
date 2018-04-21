import { Component } from '@angular/core';
// @Pages
import { SendClaimPage } from "../send-claim/send-claim";
import { ClaimsListPage } from "../claims-list/claims-list";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SendClaimPage;
  tab2Root = ClaimsListPage;

  constructor() {

  }
}
