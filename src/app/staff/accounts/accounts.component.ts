import { Component, OnInit } from '@angular/core';
import { AccountsService } from 'src/app/shared/accounts.service';
import { Accounts } from 'src/app/models/accounts';

@Component({
  selector: 'app-accounts',
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

    <input type="text" class="form-control rounded-pill" autocomplete="off" [(ngModel)] ="pass" name="pass" id="exampleFormControlInput1" placeholder="*********">

  </div>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Show</button>



    </div>
    </form>

  </div>

  <table class="table table-hover">
  <thead>
<tr><th>id</th>
<th> Acco no</th>
<th>Current Balance</th>
<th>Customer Id</th>
<th>Staff assign</th>
<th>account_type_id</th>
<th>acc status Id</th>
</tr>
<tbody><tr *ngFor="let user of listAccounts"><td>{{user.account_id}}</td>
<td>{{user.account_no}}</td>
<td>{{user.current_balance}}</td>
<td>{{user.cust_id}}</td>
<td>{{user.staff_id}}</td>
<td>{{user.account_Type_id}}</td>
<td>{{user.acc_status_id}}</td>
</tr></tbody>
</table>
</div>
    <p>
      accounts works!
    </p>
  `,
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  listAccounts:Accounts[]=[];
  Id:number=0;
  pass:string="";

  constructor(private  _AccountsService:AccountsService) { }

  ngOnInit(): void {

  }
  onShow(){

    this._AccountsService.getallaccounts(this.Id,this.pass).subscribe(
      data=>
      {
        this.listAccounts=data;
    
    
      }
    )
    

  }

}
