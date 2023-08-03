import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { catchError, map, take, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myData: any;
  constructor(
    private apiService: ApiService,
    private http: HttpClient,

  ){



  }

  ngOnInit(): void{


   this.apiService.getData().subscribe((data) => {
    this.myData = data;
    console.log(data)
   })
  }




}
