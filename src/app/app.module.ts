import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CheckComponent } from './check/check.component';
import { AddUserComponent } from './add-user/add-user.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './staff/users/users.component';
import { UsersService } from './shared/users.service';
import { FormsModule } from '@angular/forms';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AddCustomerComponent } from './staff/viewcustomer/add-customer.component';
import { AccountsService } from './shared/accounts.service';
import { AccountsComponent } from './staff/accounts/accounts.component';
import { CustomerService } from './shared/customer.service';
import { CreatecustComponent } from './staff/createcust/createcust.component';
import { ViewaccountsComponent } from './user-interface/viewaccounts/viewaccounts.component';
import { TransactionComponent } from './user-interface/transaction/transaction.component';
import { TransactionService } from './shared/transaction.service';
import { CardrequestComponent } from './user-interface/cardrequest/cardrequest.component';
import { UpdatereqComponent } from './staff/updatereq/updatereq.component';
import { AddaccountComponent } from './staff/addaccount/addaccount.component';
import { ViewrequestComponent } from './staff/viewrequest/viewrequest.component';
import { BalanceComponent } from './user-interface/balance/balance.component';
import { ViewtransactionsComponent } from './user-interface/viewtransactions/viewtransactions.component';
import { AlltransactionsComponent } from './staff/alltransactions/alltransactions.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CheckComponent,
    AddUserComponent,
    StaffComponent,
    UsersComponent,
    UserInterfaceComponent,
    AddCustomerComponent,
    AccountsComponent,
    CreatecustComponent,
    ViewaccountsComponent,
    TransactionComponent,
    CardrequestComponent,
    UpdatereqComponent,
    AddaccountComponent,
    ViewrequestComponent,
    BalanceComponent,
    ViewtransactionsComponent,
    AlltransactionsComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UsersService,AccountsService,CustomerService,TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
