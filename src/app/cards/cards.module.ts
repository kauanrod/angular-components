import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRedComponent } from '../card-red/card-red.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';
import { CardPurpleButtonComponent } from '../card-purple-button/card-purple-button.component';
import { CardRedButtonComponent } from '../card-red-button/card-red-button.component';
import { CardRedCancelButtonComponent } from '../card-red-cancel-button/card-red-cancel-button.component';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  declarations: [
    CardRedComponent,
    CardPurpleComponent,
    CardPurpleButtonComponent,
    CardRedButtonComponent,
    CardRedCancelButtonComponent,
  ],
  imports: [
    CommonModule,
    MatSliderModule,
  ],
  exports: [
    CardRedComponent,
    CardPurpleComponent
  ]
})
export class CardsModule { }
