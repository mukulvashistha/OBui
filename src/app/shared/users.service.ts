import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpclient:HttpClient) { }

  postusers(user:Users):Observable<any>{
return this.httpclient.post("https://localhost:44311/api/users",user);
 }
 getallusers(staff_id:number,password:string):Observable<any>{
  return this.httpclient.get("https://localhost:44311/api/users/"+staff_id+"/"+password);
 }
}
