import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-staff',
  template: `
  <div class="grid-container">
  <h1 class="mat-h1">Staff Services</h1>
  <mat-grid-list cols="3" rowHeight="250px">
    <mat-grid-tile *ngFor="let card of cards | async" [colspan]="card.cols" [rowspan]="card.rows">
    <a  routerLink={{card.action}}>
      <mat-card class="dashboard-card">
        <mat-card-header>
          <mat-card-title>
            {{card.title}}
            

          </mat-card-title>
        </mat-card-header>
        <mat-card-content class="dashboard-card-content">
          <div>please click on this slide
          <div class = "e-card">
          

        
        </div>
         <picture>
<source media='(min-width:0px)' srcset="https://material.angular.io/assets/img/examples/shiba2.jpg">
<img mat-card-image src="" alt="Photo of a Shiba Inu">
</picture>
          </div>
        </mat-card-content>
       
        
        
      </mat-card>
      </a>
    </mat-grid-tile>
  </mat-grid-list>
</div>
  <p>
      staff works!
    </p>
  `,
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'View Users', cols: 1, rows: 1,action:"/users" },
          { title: 'View Accounts', cols: 1, rows: 1,action:"/accounts" },
          { title: ' View Customer ',action:"/viewCustomer" ,cols: 3, rows: 1 },
          { title: 'View Transactions',action:"/alltransaction", cols: 3, rows: 1 },
          { title: ' Add Customer ',action:"/createcust" ,cols: 3, rows: 1 },
          { title: 'Add Account',action:"/addaccount", cols: 3, rows: 1 },
          { title: 'Request Approval',action:"/viewrequest", cols: 3, rows: 1 }
        ];
      }

      return [
        { title: 'View Users', cols: 1, rows: 1,action:"/users" },
        { title: 'View Accounts', cols: 1, rows: 1,action:"/accounts" },
        { title: 'View Customer', cols: 1, rows: 1,action:"/viewCustomer" },
        { title: 'View Transactions', cols: 1, rows: 1,action:"/alltransaction" },
        { title: 'Add Customer', cols: 1, rows: 1,action:"/createcust" },
        { title: 'Add Account', cols: 1, rows: 1 ,action:"/addaccount"},
        { title: 'Request Approval',action:"/viewrequest", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}


