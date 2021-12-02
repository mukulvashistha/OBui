import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
  <div class="row justify-content-center ">



  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>



 



    <div class="mb-3 input-group-sm ">

      <label for="exampleFormControlInput1" class="form-label">User id</label>

      <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder=" ">

    </div>
    <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Password</label>

    <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="*********">

  </div>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Login</button>



    </div>

  </div>



</div>
    <p>
      users works!
    </p>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
