import { Component, OnInit } from '@angular/core';
import { Sport } from '../../models';
import { Sports } from '../../providers/sports';
@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.css'],
})
export class SportsUiComponent implements OnInit {
  loading: boolean = false;
  sportsRecord: Sport[] = [];
  cricketRecord:Sport[] = [];
  constructor(private sportsService: Sports) {}

  ngOnInit(): void {
    this.getSportsRecords();
  }

  getSportsRecords(): void {
    this.loading = true;
    this.sportsService.retrieveSportsRecords('Canada').subscribe({
      next:(res:any)=>{
        this.loading = false
        this.sportsRecord = res.football
        this.cricketRecord=res.cricket
        console.log("response",res)
      },
      error:(error:any)=>{
        this.loading =false;
        console.log(error)
      }
      
      
    });
  }
}
