import { Injectable } from '@angular/core';
import { Cardrequest } from '../models/cardrequest';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardrequestService {

  constructor(private httpclient:HttpClient) { }

  postrequest(request:Cardrequest,cust_id:number):Observable<any>{
return this.httpclient.post("https://localhost:44311/api/Card_Requests/"+cust_id,request);
 }
 
 putrequest(request:Cardrequest,cust_id:number):Observable<any>{
  return this.httpclient.post("https://localhost:44311/api/Card_Requests/"+cust_id,request);
   }
  

}
