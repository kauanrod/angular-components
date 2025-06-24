import { Component } from '@angular/core';

@Component({
  selector: 'app-card-red',
  templateUrl: './card-red.component.html',
  styleUrls: ['./card-red.component.scss']
})
export class CardRedComponent {
    plan = {
      data: {
        type: 'Basic',
        price: 100.00,
      },
    }
}
