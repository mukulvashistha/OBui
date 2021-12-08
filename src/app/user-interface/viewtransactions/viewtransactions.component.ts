
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/shared/transaction.service';
import { Transaction } from 'src/app/models/transaction';
@Component({  selector: 'app-viewtransactions',  template: `  <div class="row justify-content-center "> 
 <div class="col-md-4 shadow bg-body rounded p-3  ">    <div class="btn-class">    
    <img src="assets/images/profile.png" width="80px" class="">    </div>   
 <form (submit)="onShow()" action="" autocomplete="off">    <div class="mb-3 input-group-sm ">  
    <label for="exampleFormControlInput1" class="form-label">Customer id</label>     
 <input type="number" [(ngModel)]= "Id" name= "Id" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" ">
    </div>    <div class="btn-class">      <button class="btn btn-primary rounded-pill ">Show</button>   
 </div>    </form>  
</div> 

 <table class="table table-hover">  <thead><tr><th>senders account</th>
<th> Beneficiary account</th><th>Customer Id</th><th>Amount</th><th>transaction_type_id</th></tr>
<tbody><tr *ngFor="let user of listTransactions"><td>{{user.from_Acc}}</td><td>{{user.to_Acc}}</td>
<td>{{user.cust_id}}</td><td>{{user.amount}}</td><td>{{user.transaction_Type_Id}}</td></tr></tbody></table>  
  <p>      viewtransactions works!    </p>  `, 
 styleUrls: ['./viewtransactions.component.css']})export class ViewtransactionsComponent implements OnInit {  listTransactions:Transaction[]=[];  Id:number=0;    constructor(private  _TransactionService:TransactionService) { }      ngOnInit(): void {      }    onShow(){        this._TransactionService.gettransaction(this.Id).subscribe(        data=>        {          this.listTransactions=data;                    }      )            }  }


