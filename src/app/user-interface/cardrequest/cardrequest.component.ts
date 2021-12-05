import { Component, OnInit } from '@angular/core';
import { Cardrequest } from 'src/app/models/cardrequest';
import { CardrequestService } from 'src/app/shared/cardrequest.service';

@Component({
  selector: 'app-quick',
  template: `
    
  <div class="row justify-content-center ">



  <div class="col-md-4 shadow bg-body rounded p-3  ">

    <div class="btn-class">

        <img src="assets/images/profile.png" width="80px" class="">




    </div>



 


    <form (submit)="onSubmit()" action="">
    <div class="mb-3 input-group-sm ">

      <label for="exampleFormControlInput1" class="form-label">Account no.</label>

      <input type="name" [(ngModel)] ="accountno" name="accountno" class="form-control rounded-pill" id="exampleFormControlInput1" placeholder="Alex John">

    </div>
    <div class="mb-3 input-group-sm">

    <label for="exampleFormControlInput1" class="form-label">Customer id</label>

    <input type="number" class="form-control rounded-pill"  [(ngModel)] ="cust_id" name="cust_id" id="exampleFormControlInput1" placeholder="*********">

  </div>
 

    <select [(ngModel)]="card_type"  name="card_type"class="form-select form-select-sm mb-3 rounded-pill" aria-label=".form-select-sm example">

      <option selected>Choose your Card type</option>

      <option value="credit">Credit</option>

      <option value="debit">Debit</option>


    </select>

    <div class="btn-class">

      <button class="btn btn-primary rounded-pill ">Submit</button>



    </div>
    </form>


  </div>



</div>

  <p>
      card request works!
    </p>
  `,
  styleUrls: ['./cardrequest.component.css']
})
export class CardrequestComponent implements OnInit {

  public accountno:string="";
public cust_id:number=0;
public card_type:string="";
objPosts:Cardrequest=new Cardrequest();
  constructor(private _CardrequestService :CardrequestService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    var request=new Cardrequest();
    request.account_no=this.accountno;
    request.cust_id=this.cust_id;
    request.card_type=this.card_type;
this._CardrequestService.postrequest(request,this.cust_id).subscribe(
  data=>
  {

  this.objPosts= data;
  }
)
  }

}
