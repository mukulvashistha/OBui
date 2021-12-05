import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpclient:HttpClient) { }

  posttransaction(transaction:Transaction,cust_id:number):Observable<any>{
return this.httpclient.post("https://localhost:44311/api/Transactions/"+cust_id,transaction);
 }
}
