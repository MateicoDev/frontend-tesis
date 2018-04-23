import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendClaimPage } from './send-claim';
import { ClaimsProvider } from "../../providers/claims/claims";

@NgModule({
  declarations: [
    SendClaimPage,
  ],
  imports: [
    IonicPageModule.forChild(SendClaimPage),
  ],
  providers: [
    ClaimsProvider
  ]
})
export class SendClaimPageModule {}
