
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {  

  selectedEmployeeId:number;
  selectedTemplate:any;

  constructor(private http : HttpClient) { }

  GetEmployeeList():Observable<any>{
    debugger;
  return this.http.get(environment.API_URL+'Employee/GetAllEmployee');
}

GetAllUser():Observable<any>{
  return this.http.get(environment.API_URL+'Users/GetAllUser');
 // return this.http.get('http://localhost:56046/api/Users/GetAllUser');
}

}
