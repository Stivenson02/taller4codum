import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import { Gifphy } from '../models/gifphy';
import { environment } from '../../environments/environment';

/*
const httpOptions = {
  headers: new HttpHeaders({'q': 'ghost', 'api_key': 'AG80XTkxfw9LAVtuRKS5nUEE80CsmSeG', 'limit': '1'}
  )};
*/

@Injectable({
  providedIn: 'root'
})
export class GifphyService {

  public API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
    return this.http.get('http://api.giphy.com/v1/gifs/search?q=ghost&api_key=AG80XTkxfw9LAVtuRKS5nUEE80CsmSeG&limit=3');
  }
}
