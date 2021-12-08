
import { Component, OnInit } from '@angular/core';import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/shared/transaction.service';
@Component({  selector: 'app-alltransactions', 
 template: `  <div class="row justify-content-center ">  <div class="col-md-4 shadow bg-body rounded p-3  ">  
  <div class="btn-class">      
  <img src="assets/images/profile.png" width="80px" class="">    </div>   
 <form (submit)="onShow()" action="" autocomplete="off">     <div class="mb-3 input-group-sm ">      <label for="exampleFormControlInput1" class="form-label">Staff id</label>      <input type="number" [(ngModel)]= "Id" name= "Id" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" ">    </div>    <div class="mb-3 input-group-sm">    <label for="exampleFormControlInput1" class="form-label">Password</label>    <input type="text" class="form-control rounded-pill" [(ngModel)] ="pass" name="pass" id="exampleFormControlInput1" placeholder="*********">  </div>    <div class="btn-class">      <button class="btn btn-primary rounded-pill ">Show</button>    </div>    </form>  </div> 

 <table class="table table-hover">  <thead><tr><th>senders account</th><th> Beneficiary account</th><th>Customer Id</th><th>Amount</th><th>transaction_type_id</th></tr><tbody><tr *ngFor="let user of listTransactions"><td>{{user.from_Acc}}</td><td>{{user.to_Acc}}</td><td>{{user.cust_id}}</td><td>{{user.amount}}</td><td>{{user.transaction_Type_Id}}</td></tr></tbody></table></div>    <p>      alltransactions works!    </p>  `,  styleUrls: ['./alltransactions.component.css']})export class AlltransactionsComponent implements OnInit {  listTransactions:Transaction[]=[];  Id:number=0;  pass:string="";  constructor(private  _TransactionService:TransactionService) { }  ngOnInit(): void {  }  onShow(){    this._TransactionService.getalltransactions(this.Id,this.pass).subscribe(      data=>      {        this.listTransactions=data;              }    )      }}

