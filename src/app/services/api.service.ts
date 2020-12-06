import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseRequest } from '../models/base-request';
import { Starship } from '../models/starship';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  async getStarships() : Promise<Starship[]> {
    const request = await this.http.get<BaseRequest<Starship>>('https://swapi.dev/api/starships/').toPromise();
    return request.results;
  }
}
