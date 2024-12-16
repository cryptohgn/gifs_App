import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})

export class SidebarComponent {

  searchedTagsList!: string[];

  constructor( private gifsService: GifsService){}
  // inyectar el servicio
  //
  //obtener el array de los tags
  //meterlo en una propiedad
  //un ngfor para mostrarlos

  get tags(){
    return this.gifsService.tagsHistory;
  }

  // click llama a la funcion del componente getGifs()
  // esta funcion o metodo llama a la funcion del servicio q trae los gifs filtrados
  //
  getGifs(tag: string){
    return this.gifsService.searchTag(tag)
  }



}
