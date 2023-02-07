import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ViewChild } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { ApiServiceService } from '../api-service.service';
import { NgModule } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';


export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})


export class EmployeelistComponent implements OnInit {

  constructor(
    private router: Router,
    //private _apiservices:ApiServiceService,
    private _employeeService: EmployeeServiceService,

  ) { }
  /**
  * Pre-defined columns list for user table
  */
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  },
  {
    id: 'weight',
    value: 'Weight',
  },
  {
    id: 'symbol',
    value: 'Symbol',
  }];

  userlist: any = [];
  ngOnInit() {
    this.getAllUser()
  }

  confirm(): void {
    // this.service.DeleteArticle(this.selectedArticleId).subscribe((data)=>{
    //   this.GetArticles();
    // }
    // ,error=>{
    //   alert("Network issue Please try agin later");

    // });
    // this.modalRef.hide();
  }

  CreateEmployee() {
    this.router.navigate(['createemployee']);
  }
  getAllUser() {
    this._employeeService.GetAllUser().subscribe(data => {
      if (data != null) {
        this.userlist = data;
      }
      else {
        window.alert("No Data");
      }
    })
  }
  toggleView() {

  }
  logOut(){
    this.router.navigate(['login']);
  }
  
}
