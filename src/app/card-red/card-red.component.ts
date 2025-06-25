import { Component } from '@angular/core';

interface ICardRedData {
  plan: IPlan;
}

interface IPlan {
  type: string;
  price: number;
}

@Component({
  selector: 'app-card-red',
  templateUrl: './card-red.component.html',
  styleUrls: ['./card-red.component.scss']
})
export class CardRedComponent {
  data: ICardRedData = {
    plan: {
      type: 'Basic',
      price: 100.00
    }
  }
}
