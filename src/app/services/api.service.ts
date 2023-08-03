import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {




  constructor(
    private http: HttpClient,


  ) { }


  url = 'https://nba-stats-db.herokuapp.com/api/playerdata/season/2023';
    getData(){
      return this.http.get(this.url);
    }

}
