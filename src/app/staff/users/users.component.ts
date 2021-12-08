import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-users',
  template: `
  <div class="row justify-content-center ">



  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>
    <form (submit)="onShow()" action="" autocomplete="off">



 



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
<tr><th>id</th>
<th>customer name</th>
<th>mobile</th>
<th>PAN number</th>
<th>Aadhar</th>
<th>Acount Type</th>
</tr>
<tbody><tr *ngFor="let user of listUsers"><td>{{user.user_id}}</td>
<td>{{user.cust_name}}</td>
<td>{{user.mobile}}</td>
<td>{{user.pan_no}}</td>
<td>{{user.aadhar}}</td>
<td>{{user.account_type}}</td>
</tr></tbody>
</table>

</div>

    <p>
      users works!
    </p>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  listUsers:Users[]=[];
  Id:number=0;
  pass:string="";

  constructor(private  _UsersService:UsersService) { }

  ngOnInit(): void {

  }
  onShow(){

    this._UsersService.getallusers(this.Id,this.pass).subscribe(
      data=>
      {
        this.listUsers=data;
    
    
      }
    )
    

  }

}
