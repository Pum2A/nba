import { Component, OnInit  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit  {
  myData: any;
  i = 1;
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
