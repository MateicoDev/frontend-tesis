import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimMessagePage } from './claim-message';
import { ClaimsProvider } from "../../providers/claims/claims";

@NgModule({
  declarations: [
    ClaimMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimMessagePage),
  ],
  providers: [
    ClaimsProvider
  ],
})
export class ClaimMessagePageModule {}
