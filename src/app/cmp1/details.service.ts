import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private http: HttpClient) { }

  private url = "https://reqres.in/api/users?page=2";
private uurl = "https://jsonplaceholder.typicode.com/posts";

  getDetails() {
    return this.http.get(this.uurl);
  }
}
