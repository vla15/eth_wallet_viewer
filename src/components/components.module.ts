import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SearchBarComponent } from './search-bar/search-bar';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [CommonModule, FormsModule],
  exports: [SearchBarComponent],
  entryComponents: [SearchBarComponent],
})
export class CommonComponentModule {}
