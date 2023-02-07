import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   {path:'employeeslist',component:EmployeelistComponent },
   {path:'createemployee',component:CreateemployeeComponent},
   { path:'login',component:LoginComponent},  
  { path: 'Dasboard', component: DashboardComponent,    
    data: {  title: 'Dashboard Page'   }    
  }, 
   {  path: '',     redirectTo: 'login',     pathMatch: 'full',   }  

   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
