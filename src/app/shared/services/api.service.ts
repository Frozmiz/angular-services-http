import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  page: number = 0;
  api_url: string = "https://www.digi-api.com/api/v1/digimon";

  constructor(private http: HttpClient) { }

  getDigimons() {
    return this.http.get(`${this.api_url}?page=${this.page}`)
  }

  getDigimon(id: string | null | undefined) {
    return this.http.get(`${this.api_url}/${id}`)
  }
}
  