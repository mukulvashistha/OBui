import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  template: `
  <div class="row justify-content-center ">



  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>



 



    <div class="mb-3 input-group-sm ">

      <label for="exampleFormControlInput1" class="form-label">User Name</label>

      <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Alex John">

    </div>
    <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Password</label>

    <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="*********">

  </div>

  <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Mobile no.</label>

    <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="91*******">

  </div>   
  <div class="mb-3 input-group-sm">

      <label for="exampleFormControlInput1" class="form-label">Aadhar</label>

      <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="">

    </div>

    <div class="mb-3">

      <label for="exampleFormControlInput1" class="form-label">PAN no.</label>

      <input type="email" class="form-control rounded-pill" id="exampleFormControlInput1" >

    </div>

 

    <select class="form-select form-select-sm mb-3 rounded-pill" aria-label=".form-select-sm example">

      <option selected>Choose your account type</option>

      <option value="1">Saving</option>

      <option value="2">Current</option>


    </select>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Add Account</button>



    </div>

  </div>



</div>

 
  
    
  

    <p>
      add-user works!
    </p>
  `,
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
