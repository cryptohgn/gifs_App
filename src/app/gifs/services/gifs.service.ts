import { afterNextRender, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

// const GIPHY_API_KEY = 'BRc1i9xcRAmAO2SEkxpw6viowBT8K6Xf'


@Injectable({ providedIn: 'root' })
export class GifsService {

  // public gifsResult: any  = "";

  public gifList: Gif [] = [];

  private api_key:     string = 'BRc1i9xcRAmAO2SEkxpw6viowBT8K6Xf';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs/';

  private _tagsHistory: string[] = [];

  constructor(private http: HttpClient) {
    afterNextRender(() => {
    this.loadLocalStorage()
});
}


  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory.splice(10);
    // console.log('Historial actualizado:', this._tagsHistory); // Confirmar cambios.
    this.saveLocalStorage();

  }

  private saveLocalStorage(): void{
   localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse( localStorage.getItem('history')! )

    if (this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0])

    // const first = this._tagsHistory.shift;
    // this.gifList = this.gifList.filter((giflS)=> )
  }

   searchTag(tag: string) {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.api_key)
      .set('q', tag)
      .set('limit', 10)


    this.http.get<SearchResponse>(`${ this.serviceUrl }search`, { params })
    .subscribe( resp => {
      this.gifList = resp.data;
      // console.log(this.gifList)
    })



    // this.getGifs(tag)
  // const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=BRc1i9xcRAmAO2SEkxpw6viowBT8K6Xf&q=valorant&limit=10')
  // const data = await resp.json;

  }

  // getGifs(tag: string): Observable<any>{
  //   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=BRc1i9xcRAmAO2SEkxpw6viowBT8K6Xf&q=${tag}&limit=20`;

  //   return this.gifsResult = this.http.get<any>(apiUrl)
  //   console.log(this.gifsResult)
  // }

  get tagsHistory() {
    return [...this._tagsHistory];
  }


}
