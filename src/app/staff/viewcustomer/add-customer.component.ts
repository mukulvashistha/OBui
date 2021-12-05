import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/shared/customer.service';
@Component({
  selector: 'app-add-customer',
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

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Show</button>



    </div>
    </form>

  </div>

  <table class="table table-hover">
  <thead>
<tr><th>Customer Id</th>
<th> last Transaction</th>
<th>User Id Id</th>
</tr>
<tbody><tr *ngFor="let user of listCustomer"><td>{{user.cust_id}}</td>
<td>{{user.last_Transaction}}</td>
<td>{{user.user_id}}</td>
</tr></tbody>
</table>
</div>
    <p>
      add-customer works!
    </p>
  `,
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  listCustomer:Customer[]=[];
  Id:number=0;
  pass:string="";

  constructor(private  _CustomerService:CustomerService) { }

  ngOnInit(): void {

  }
  onShow(){

    this._CustomerService.getallcustomer(this.Id,this.pass).subscribe(
      data=>
      {
        this.listCustomer=data;
    
    
      }
    )
    

  }

}
