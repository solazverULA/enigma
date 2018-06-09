import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPopoverPage } from './card-popover';

@NgModule({
  declarations: [
    CardPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(CardPopoverPage),
  ],
})
export class PopoverPageModule {}
