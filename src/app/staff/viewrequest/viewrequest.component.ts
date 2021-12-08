import { Component, OnInit } from '@angular/core';
import { Cardrequest } from 'src/app/models/cardrequest';
import { CardrequestService } from 'src/app/shared/cardrequest.service';
@Component({
  selector: 'app-viewrequest',
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
<tr><th>card_type</th>
<th> card_status</th>
<th>user.account_no</th>
<th>customer id</th>
<th>Action</th>
</tr>
<tbody><tr *ngFor="let user of listrequest"><td>{{user.card_type}}</td>
<td>{{user.card_status}}</td>
<td>{{user.account_no}}</td>
<td>{{user.cust_id}}</td>
<td><button class="btn btn-danger" (click)="approve(user.req_id,user.account_no,user.cust_id,user.card_type)">Approve</button>&nbsp;<button (click)="delete(user.req_id)" class="btn btn-warning">Delete</button></td>
</tr></tbody>
</table>
</div>
 
    <p>
      viewrequest works!
    </p>
  `,
  styleUrls: ['./viewrequest.component.css']
})
export class ViewrequestComponent implements OnInit {
  listrequest:Cardrequest[]=[];
  Id:number=0;
  pass:string="";

  constructor(private  _CardrequestService:CardrequestService) { }

  ngOnInit(): void {

  }
  delete(id:number)
  {
    this._CardrequestService.deleterequest(id,this.Id,this.pass).subscribe(
      data=>
      {
        this.listrequest=data;
    
    
      }
    )
    
  
  }
  approve(id:number,acc:string,cust_id:number,card_type:string)
  {
    var request=new Cardrequest();
    request.card_status=true;
    request.req_id=id;
    request.cust_id=cust_id;
    request.account_no=acc;
    request.card_type=card_type;

    this._CardrequestService.putrequest(request,this.Id,this.pass,id).subscribe(
      data=>
{
  this.listrequest=data;
}
    )
  }
  
  onShow(){

    this._CardrequestService.getallrequest(this.Id,this.pass).subscribe(
      data=>
      {
        this.listrequest=data;
    
    
      }
    )
    

  }


}
