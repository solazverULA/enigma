import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPopoverPage } from './top-popover';

@NgModule({
  declarations: [
    TopPopoverPage,
  ],
  imports: [
    IonicPageModule.forChild(TopPopoverPage),
  ],
})
export class PopoverPageModule {}
