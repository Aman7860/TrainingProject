import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from "src/Models/Employee"

const Url="http://localhost:56046/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  //================ Employee Form======================//

  InsertEmployee(employee:Employee)  
  {  
    debugger;  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Employee[]>(Url+'/InsertEmployee/', employee,httpOptions)  
  }  
  GetEmployeeRecord():Observable<Employee[]>  
  {  
    debugger;  
   return this.http.get<Employee[]>(Url+"Employee/GetAllEmployee")  
  }  
  DeleteEmployee(id:string):Observable<number>  
  {  
    debugger;  
   return this.http.get<number>(Url + '/Delete/?id='+id);  
  }  
  GetEmployeeById(id)  
  {  
   return this.http.get<Employee>(Url + '/GetEmployeeById/?id=' + id);  
  }  
  UpdatEmplouee(employee:Employee)  
  {  
   debugger;  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Employee[]>(Url+'/UpdateEmployee/', employee,httpOptions)  
  }  

}
