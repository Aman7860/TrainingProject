import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Form Validables 
  registerForm: any = FormGroup;
  submitted = false;

  constructor(private router: Router,
    private LoginService: LoginService,
    private formBuilder: FormBuilder
  ) { }


  //login form
  ngOnInit(): void {
    //login form
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  //Add user form actions
  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else {
      let body = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      }
      console.log(body);
      this.LoginService.loginUser(body).subscribe((response) => {
        if (response.status = "Success") {
          this.router.navigate(['employeeslist']);
        }
        alert(response.message)
        console.log(response);
      })
    }

  }

  // logOut() {
  //   let body = {
  //     username: this.registerForm.value.username,
  //     password: this.registerForm.value.password
  //   }
  //   this.LoginService.logout(body).subscribe((response) => {
  //     if (response.status = "Success") {
  //       this.router.navigate(['login']);
  //     }
  //     alert(response.message)
  //     console.log(response);
  //   })
  // }

  logOut(){
    this.router.navigate(['login']);
  }



}

