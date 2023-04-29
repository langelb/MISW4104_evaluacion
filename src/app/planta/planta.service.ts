import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../enviroments/enviroment';
import { Planta } from './planta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

constructor(private http: HttpClient) { }

  private apiUrl: string = environment.baseUrl;

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }
}
