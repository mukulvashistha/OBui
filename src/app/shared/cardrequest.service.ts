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
 
 putrequest(request:Cardrequest,staff_id:number,password:string,req_id:number):Observable<any>{
  return this.httpclient.put("https://localhost:44311/api/Card_Requests/"+req_id+"/"+staff_id+"/"+password,request);
   }
  
   getallrequest(staff_id:number,pass:string):Observable<any>{
    return this.httpclient.get("https://localhost:44311/api/Card_Requests/"+staff_id+"/"+pass);
     }
    deleterequest(id:number,staff_id:number,pass:string):Observable<any>{
      return this.httpclient.delete("https://localhost:44311/api/Card_Requests/"+id+"/"+staff_id+"/"+pass);
       }
    
}
