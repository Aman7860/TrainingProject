import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  //Inline Template
  // template: `<div>
  //       <h1> Hello {{localdata}} how are you ? </h1>
  //       <h2> Welcome to Inline Template ! </h2>
  //   </div>`,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  localdata: string = "DASHBOARD";
  constructor() { }
  title: string = "";
  image: string = "";
  message: string = "";
  random: string = "";
  ngOnInit(): void {
    this.title = "Types of Data Binding";
    this.image = "assets/sponsor-22.png"
  }
  onclick() {
    this.message = "Thank you for subscribe!";
    console.log("Thank you for subscribe!")

  }

}
