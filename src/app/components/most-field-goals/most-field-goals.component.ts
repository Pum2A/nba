import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-most-field-goals',
  templateUrl: './most-field-goals.component.html',
  styleUrls: ['./most-field-goals.component.scss']
})
export class MostFieldGoalsComponent {
  myData: any;
  i = 1;
  constructor(private apiService: ApiService, private http: HttpClient) {}

  ngOnInit(): void {
    this.apiService.getData().subscribe((data) => {
      this.myData = data;
      console.log(data);
    });
  }
}
