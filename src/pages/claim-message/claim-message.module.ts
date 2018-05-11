import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClaimMessagePage } from './claim-message';

@NgModule({
  declarations: [
    ClaimMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ClaimMessagePage),
  ],
})
export class ClaimMessagePageModule {}
