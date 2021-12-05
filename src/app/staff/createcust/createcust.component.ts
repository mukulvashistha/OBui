import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/customer.service';
import { Customer } from 'src/app/models/customer';
@Component({
  selector: 'app-createcust',
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

  <label for="exampleFormControlInput1" class="form-label">User Id</label>

  <input type="number" class="form-control rounded-pill" [(ngModel)] ="userid" name="userid" id="exampleFormControlInput1" placeholder="*********">

</div>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Create</button>



    </div>
    </form>

  </div>
    <p>
      createcust works!
    </p>
  `,
  styleUrls: ['./createcust.component.css']
})
export class CreatecustComponent implements OnInit {

  objCustomer:Customer=new Customer();
  Id:number=0;
  pass:string="";
  userid:number=0;

  constructor(private  _CustomerService:CustomerService) { }

  ngOnInit(): void {

  }
  onShow(){
    var cust=new Customer();
    cust.user_id=this.userid;

    this._CustomerService.postcustomer(cust,this.Id,this.pass).subscribe(
      data=>
      {
        this.objCustomer=data;
    
    
      }
    )
    

  }

}
