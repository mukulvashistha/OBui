import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClient) { }

  postcustomer(cust:Customer,staff_id:number,password:string):Observable<any>{
    return this.httpclient.post("https://localhost:44311/api/Bank_Customers/"+staff_id+"/"+password,cust);
     }
  getallcustomer(staff_id:number,password:string):Observable<any>{
    return this.httpclient.get("https://localhost:44311/api/Bank_Customers/"+staff_id+"/"+password);
   }
}
