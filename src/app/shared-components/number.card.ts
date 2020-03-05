import { Component, Input } from '@angular/core';
import { NumberCard } from '../objects-def/objects.def';

@Component({
    selector: 'number-card',
    templateUrl: './number.card.html'
})
export class NumberCardComponent {
    @Input() numberCard: NumberCard;
}