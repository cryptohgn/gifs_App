import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',

})
export class CardListComponent {

@Input()
public getGifs!: Gif [];

}
