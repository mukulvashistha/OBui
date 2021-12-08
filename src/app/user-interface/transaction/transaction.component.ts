import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/shared/transaction.service';
@Component({
  selector: 'app-transaction',
  template: `
    <p>
      transaction works!
    </p>
    <div class="row justify-content-center ">



    <div class="col-md-4 shadow bg-body rounded p-3  ">
  
      <div class="btn-class">
  
          <img src="assets/images/profile.png" width="80px" class="">
  
  
  
  
      </div>
      <form (submit)="onSubmit()" action="" autocomplete="off">
  
  
  
   
  
  
  
      <div class="mb-3 input-group-sm ">
  
        <label for="exampleFormControlInput1" class="form-label">Sender's Account no.</label>
  
        <input type="text" [(ngModel)]= "from" name= "from" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" ">
  
      </div>
      <div class="mb-3 input-group-sm">
  
      <label for="exampleFormControlInput1" class="form-label">Beneficiary Account no.</label>
  
      <input type="text" class="form-control rounded-pill" [(ngModel)] ="to" name="to" id="exampleFormControlInput1" placeholder="*********">
  
    </div>
    <div class="mb-3 input-group-sm">
  
    <label for="exampleFormControlInput1" class="form-label">Customer Id</label>
  
    <input type="number" class="form-control rounded-pill" [(ngModel)] ="cust_id" name="cust_id" id="exampleFormControlInput1" placeholder="*********">
  
  </div>
  <div class="mb-3 input-group-sm">
  
  <label for="exampleFormControlInput1" class="form-label">Enter Amount</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="amount" name="amount" id="exampleFormControlInput1" placeholder="*********">

</div>
<div class="mb-3 input-group-sm">
  
<label for="exampleFormControlInput1" class="form-label">Transaction Type Id</label>



<select [(ngModel)]="transaction_Type_Id"  name="transaction_Type_Id"class="form-select form-select-sm mb-3 rounded-pill" aria-label=".form-select-sm example">

      <option selected>Choose your Transaction type id</option>

      <option value=1>debit</option>



    </select>

</div>

  
      <div class="btn-class">
  
        <button class="btn btn-primary rounded-pill ">Create</button>
  
  
  
      </div>
      </form>
  
    </div>
   

  `,
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
from:string="";
to:string="";
cust_id:number=0;
amount:number=0;
transaction_Type_Id:number=0;
objTransaction:Transaction= new Transaction();
constructor(private  _TransactionService:TransactionService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    
    var trans=new Transaction();
    trans.from_Acc=this.from;
    trans.to_Acc=this.to;
    trans.amount=this.amount;
    trans.cust_id=this.cust_id;
    trans.transaction_Type_Id=this.transaction_Type_Id;


    this._TransactionService.posttransaction(trans,this.cust_id).subscribe(
      data=>
      {
        this.objTransaction=data;
    
    
      }
    )
   

  }


}
