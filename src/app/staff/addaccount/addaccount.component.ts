import { Component, OnInit } from '@angular/core';
import { Accounts } from 'src/app/models/accounts';
import { AccountsService } from 'src/app/shared/accounts.service';

@Component({
  selector: 'app-addaccount',
  template: `
  <div class="row justify-content-center ">
  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>
    <form (submit)="onShow()" action="">



 



    <div class="mb-3 input-group-sm ">

      <label for="exampleFormControlInput1" class="form-label">Staff id</label>

      <input type="number" [(ngModel)]= "Id" name= "Id" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" ">

    </div>
    <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Password</label>

    <input type="text" class="form-control rounded-pill" [(ngModel)] ="pass" name="pass" id="exampleFormControlInput1" placeholder="*********">

  </div>
  <div class="mb-3 input-group-sm">

  <label for="exampleFormControlInput1" class="form-label">account_no</label>

  <input type="text" class="form-control rounded-pill" [(ngModel)] ="account_no" name="account_no" id="exampleFormControlInput1" placeholder="">

</div>

<div class="mb-3 input-group-sm">

  <label for="exampleFormControlInput1" class="form-label">current_balance</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="current_balance" name="current_balance" id="exampleFormControlInput1" placeholder="*********">

</div>

<div class="mb-3 input-group-sm">

  <label for="exampleFormControlInput1" class="form-label">Customer Id</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="cust_id" name="userid" id="exampleFormControlInput1" placeholder="*********">

</div>
<div class="mb-3 input-group-sm">

  <label for="exampleFormControlInput1" class="form-label">Account type Id</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="account_Type_id" name="account_Type_id" id="exampleFormControlInput1" placeholder="*********">

</div>
<div class="mb-3 input-group-sm">

  <label for="exampleFormControlInput1" class="form-label">Account status Id</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="acc_status_id" name="acc_status_id" id="exampleFormControlInput1" placeholder="*********">

</div>


    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Create</button>



    </div>
    </form>

  </div>
  </div>
    <p>
      addaccount works!
    </p>
  `,
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  objAccounts:Accounts=new Accounts();
  Id:number=0;
  pass:string="";
  account_no:string="";
  current_balance:number=0;
  cust_id:number=0;
  account_Type_id:number=0;
  acc_status_id:number=0;

  constructor(private  _AccountsService:AccountsService) { }

  ngOnInit(): void {

  }
  onShow(){
    var acc=new Accounts();
    acc.cust_id=this.cust_id;
    acc.staff_id=this.Id;
    acc.current_balance=this.current_balance;
    acc.account_no=this.account_no;
    acc.account_Type_id=this.account_Type_id;
    acc.acc_status_id=this.acc_status_id;


    this._AccountsService.postaccounts(acc,this.Id,this.pass).subscribe(
      data=>
      {
        this.objAccounts=data;
    
    
      }
    )
    

  }

}
