import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  UserName:string;
  Password:string;
    
  errorMessage:string; 
  constructor(private router:Router,
    //private LoginService:LoginService
    ) { }

  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  } 

  login(){   
    // var data={
    //  UserName :this.UserName,Password: this.Password
    // } 
    // debugger;    
    // this.LoginService.Login(data).subscribe(    
    //   data => {    
    //     debugger;    
    //     if(data.Status=="Success")    
    //     {       
    //       this.router.navigate(['/Dashboard']);    
    //       debugger;    
    //     }    
    //     else{    
    //       this.errorMessage = data.Message;    
    //     }    
    //   },    
    //   error => {    
    //     this.errorMessage = error.message;    
    //   });    
  };   
}
