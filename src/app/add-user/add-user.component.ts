import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-add-user',
  template: `
 
  <div class="row justify-content-center ">



  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>



 


    <form (submit)="onSubmit()" action="">
    <div class="mb-3 input-group-sm ">

      <label for="exampleFormControlInput1" class="form-label">User Name</label>

      <input type="name" [(ngModel)] ="username" name="user" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Alex John">

    </div>
    <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Password</label>

    <input type="password" class="form-control rounded-pill"  [(ngModel)] ="password" name="password" id="exampleFormControlInput1" placeholder="*********">

  </div>

  <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Mobile no.</label>

    <input type="name"   [(ngModel)] ="Mobile"  name="mobile" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="91*******">

  </div>   
  <div class="mb-3 input-group-sm">

      <label for="exampleFormControlInput1" class="form-label">Aadhar</label>

      <input type="name"   [(ngModel)] ="aadhar"  name="aadhar" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="">

    </div>

    <div class="mb-3">

      <label for="exampleFormControlInput1" class="form-label">PAN no.</label>

      <input type="name"  [(ngModel)] ="pan"  name="pan"  class="form-control rounded-pill" id="exampleFormControlInput1" >

    </div>

 

    <select [(ngModel)]="accounttype"  name="accounttype"class="form-select form-select-sm mb-3 rounded-pill" aria-label=".form-select-sm example">

      <option selected>Choose your account type</option>

      <option value="1">Saving</option>

      <option value="2">Current</option>


    </select>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Add Account</button>



    </div>
    </form>


  </div>



</div>

 
  

  

    <p>
      add-user works!
    </p>
  `,
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
public username:string="";
public password:string="";
public Mobile :string="";
public aadhar:string="";
public pan:string="";
public accounttype:string="";
objPosts:Users=new Users();
  constructor(private  _UsersService:UsersService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    var user=new Users();
user.cust_name=this.username;
user.password=this.password;
user.mobile=this.Mobile;
user.aadhar=this.aadhar;
user.pan_no=this.pan;
user.account_type=this.accounttype;
this._UsersService.postusers(user).subscribe(
  data=>
  {

  this.objPosts= data;
  }
)
  }

}
