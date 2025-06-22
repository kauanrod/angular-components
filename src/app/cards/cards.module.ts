import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRedComponent } from '../card-red/card-red.component';
import { CardPurpleComponent } from '../card-purple/card-purple.component';
import { CardPurpleButtonComponent } from '../card-purple-button/card-purple-button.component';
import { CardRedButtonComponent } from '../card-red-button/card-red-button.component';



@NgModule({
  declarations: [
    CardRedComponent,
    CardPurpleComponent,
    CardPurpleButtonComponent,
    CardRedButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardRedComponent,
    CardPurpleComponent
  ]
})
export class CardsModule { }
