import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid-container">
      <h1 class="mat-h1">Welcome to your bank</h1>
      <mat-grid-list cols="2" rowHeight="350px">
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
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  /** Based on the screen size, switch from standard to one column per row */

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'New User',action:"/addUser" ,cols: 2, rows: 1 },
          { title: 'Staff Login',action:"/staff", cols: 2, rows: 1 },
          { title: 'User Login', action:"/userInterface",cols: 2, rows: 1 },
          { title: 'About Us',action:"", cols: 2, rows: 1 }
        ];
      }

      return [
        { title: 'New User', cols: 1, rows: 1,action:"/addUser" },
        { title: 'Staff Login', cols: 1, rows: 1,action:"/staff" },
        { title: 'User Login', cols: 1, rows: 1 ,action:"/userInterface"},
        { title: 'About Us', cols: 1, rows: 1 ,action:""}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
