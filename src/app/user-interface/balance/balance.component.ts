
import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/models/accounts';
import { AccountsService } from 'src/app/shared/accounts.service';
@Component({  selector: 'app-balance',  
template: `  <div class="row justify-content-center ">  <div class="col-md-4 shadow bg-body rounded p-3  "> 
   <div class="btn-class">        <img src="assets/images/profile.png" width="80px" class="">    </div>    
<form (submit)="onShow()" action="" autocomplete="off">    <div class="mb-3 input-group-sm ">      
<label for="exampleFormControlInput1" class="form-label">Enter Your Customer id</label>     
 <input type="number" [(ngModel)]= "Id" name= "Id" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" "> 
   </div>    <div class="btn-class">      <button class="btn btn-primary rounded-pill ">Show</button>    </div>    
</form>                     
  <table class="table table-hover table-dark">    
<thead>  <tr>  <th>Current Balance(INR)</th>  </tr>  
<tbody><tr *ngFor="let user of listAccounts">  
<td>{{user.current_balance}}</td>  </tr></tbody>  </table> 
 </div>  </div>    <p>      balance works!    </p>  `, 
 styleUrls: ['./balance.component.css']})
export class BalanceComponent implements OnInit {  
  listAccounts:Accounts[]=[]; 
   Id:number=0;   
   constructor(private  _AccountsService:AccountsService) { }    
    ngOnInit(): void {      }    
  onShow(){       
     this._AccountsService.getaccount(this.Id).subscribe(     
         data=>        {          this.listAccounts=data;

       }      
      )           
     }   
   }