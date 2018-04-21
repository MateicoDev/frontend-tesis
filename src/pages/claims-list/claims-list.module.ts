import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
// @Pages
import { ClaimsListPage } from './claims-list';
// @Providers
import { ClaimsProvider } from "../../providers/claims/claims";

@NgModule({
  declarations: [
    ClaimsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimsListPage),
  ],
  providers: [
    ClaimsProvider
  ]
})
export class ClaimsListPageModule {}
