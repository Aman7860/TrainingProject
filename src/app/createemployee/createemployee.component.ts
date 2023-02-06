import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from "@angular/common/http";  
import { FormGroup, FormControl } from '@angular/forms'; 
//import {ApiService} from 'src/app/api/api.service'

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {

  constructor(private router:Router) { }
  employees:any=[];

  ngOnInit(): void {
  }

  backToList()
  {
    this.router.navigate(['employeeslist']);
  }

 
}
