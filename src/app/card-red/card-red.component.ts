import { Component } from '@angular/core';

@Component({
  selector: 'app-card-red',
  templateUrl: './card-red.component.html',
  styleUrls: ['./card-red.component.scss']
})
export class CardRedComponent {
  type: string = 'Basic';
  price: number = 100;

  getFullPrice(): string {
    // setTimeout(() => {
    //   console.log('Changing price to complete for a test');
    //   this.type = 'Complete';
    //   this.price = 250;
    // }, 4000);
    return `U$${this.price.toFixed(2)}/Month`;
  }
}
