import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,

  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [

  ],
  exports: [
    HomePageComponent,
    CardListComponent,

  ]

})
export class GifsModule { }
