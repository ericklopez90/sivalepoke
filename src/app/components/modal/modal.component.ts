import { Component, Input } from '@angular/core';
import { PokemonModal } from 'src/app/interfaces/pokemonModal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() pokemon!: PokemonModal
}
