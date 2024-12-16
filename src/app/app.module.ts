import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { GifsModule } from './gifs/gifs.modules';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
    CommonModule,


  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


