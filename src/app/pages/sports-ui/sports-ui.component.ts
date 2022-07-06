import { Component, OnInit } from '@angular/core';
import { Sports } from '../../../app/providers/sports';

@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.css'],
})
export class SportsUiComponent implements OnInit {
  loading: boolean = false;
  sports: Sports[] = [];

  constructor(private sportsService: Sports) {}

  ngOnInit(): void {
    this.getSportsRecords();
  }

  getSportsRecords(): void {
    this.loading = true;
    this.sportsService.retrieveSportsRecords('Canada').subscribe({
      next:(res:any)=>{
        this.loading=false
        console.log(Error)
      }
    });
  }
}
