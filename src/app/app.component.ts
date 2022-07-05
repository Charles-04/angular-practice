import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'myApp';
  descrip:string = "Angular class by Mike";
  isClassEnded:boolean = false;
  numberOfStudents:number = 7;
  nameOfstudent:string='Charles';
  studentNeed:string='food';
  userName:string='Charlie too good';
  showMenu:boolean = false;
  dishes:string[]=[
    "Beans and plantain",
    "Draw soup",
    "Abacha",
    "Bread and coconut",
    "Fio Fio and yam",
    "Noodles and egg",
    "fried plantain and potato",
    "Okpa and coke",
    "Kpoff Kpoff"
  ]
  
  
  toggleMenu():void{
    this.showMenu = !this.showMenu
  }
}
