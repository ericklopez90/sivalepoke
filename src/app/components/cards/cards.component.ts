import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() name!: string;
  @Input() number!: number;
  @Output() numberPokemon = new EventEmitter<number>();

  onClick() {
    this.numberPokemon.emit(this.number);
  }

}
