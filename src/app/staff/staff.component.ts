import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  template: `
  <form action="">
      <h1>Login Form</h1>
      <div class="formcontainer">
      <hr/>
      <div class="container">
        <label for="uname"><strong>Username</strong></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
        <label for="psw"><strong>Password</strong></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
      </div>
      <button type="submit">Login</button>
      <div class="container" style="background-color: #eee">
        <label style="padding-left: 15px">
        <input type="checkbox"  checked="checked" name="remember"> Remember me
        </label>
        <span class="psw"><a href="#"> Forgot password?</a></span>
      </div>
      </div>
    </form>
    
  <p>
      staff works!
    </p>
  `,
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
