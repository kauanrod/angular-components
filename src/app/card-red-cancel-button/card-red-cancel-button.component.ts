import { Component } from '@angular/core';

@Component({
  selector: 'app-card-red-cancel-button',
  templateUrl: './card-red-cancel-button.component.html',
  // styleUrls: ['./card-red-cancel-button.component.scss']
  styles: [`
    .card-red-cancel-button {
      font-size: 16px;
      text-align: center;
      margin-top: 10px;
      border-radius: 25px;
      background-color: #d05656;
      cursor: pointer;
      font-weight: bold;
      padding: 10px;
    }
  `]
})
export class CardRedCancelButtonComponent {

}
