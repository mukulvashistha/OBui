import { Injectable } from '@angular/core';
import { Accounts } from '../models/accounts';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpclient:HttpClient) { }
  getallaccounts(staff_id:number,password:string):Observable<any>{
    return this.httpclient.get("https://localhost:44311/api/Accounts/"+staff_id+"/"+password);
   }
   getaccount(id:number):Observable<any>{
    return this.httpclient.get("https://localhost:44311/api/Accounts/"+id);
   }
   postaccounts(acc:Accounts,staff_id:number,pass:string):Observable<any>{
    return this.httpclient.post("https://localhost:44311/api/Accounts/"+staff_id+"/"+pass,acc);
     }
}
