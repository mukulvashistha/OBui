import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-user-interface',
  template: `
  <div class="grid-container">
    <h1 class="mat-h1">Customer Services</h1>
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
  
`,
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'View Accounts',action:"/viewaccounts" ,cols: 3, rows: 1 },
          { title: 'View Transactions',action:"/viewtransactions", cols: 3, rows: 1 },
          { title: 'Card Application', action:"/cardrequest",cols: 3, rows: 1 },
          { title: 'Money Transfer',action:"/transaction", cols: 3, rows: 1 },
          { title: 'Check Balance',action:"/balance", cols: 3, rows: 1 }
        ];
      }

      return [
        { title: 'View Accounts', cols: 1, rows: 1,action:"/viewaccounts" },
        { title: 'View Transactions', cols: 1, rows: 1,action:"/viewtransactions" },
        { title: 'Card Application', cols: 1, rows: 1 ,action:"/cardrequest"},
        { title: 'Money Transfer', cols: 1, rows: 1 ,action:"/transaction"},
        { title: 'Check Balance',action:"/balance", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
