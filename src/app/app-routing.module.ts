import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { AddCustomerComponent } from './staff/viewcustomer/add-customer.component';
import { StaffComponent } from './staff/staff.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { UsersComponent } from './staff/users/users.component';
import { AccountsComponent } from './staff/accounts/accounts.component';
import { CreatecustComponent } from './staff/createcust/createcust.component';
import { ViewaccountsComponent } from './user-interface/viewaccounts/viewaccounts.component';
import { TransactionComponent } from './user-interface/transaction/transaction.component';
import { CardrequestComponent } from './user-interface/cardrequest/cardrequest.component';
import { UpdatereqComponent } from './staff/updatereq/updatereq.component';
import { AddaccountComponent } from './staff/addaccount/addaccount.component';
import { ViewrequestComponent } from './staff/viewrequest/viewrequest.component';
import { BalanceComponent } from './user-interface/balance/balance.component';
import { ViewtransactionsComponent } from './user-interface/viewtransactions/viewtransactions.component';
import { AlltransactionsComponent } from './staff/alltransactions/alltransactions.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},{path:'check',component:CheckComponent},{path:'addUser',component:AddUserComponent},{path:'cardrequest',component:CardrequestComponent}
  ,{path:'staff',component:StaffComponent},{path:'users',component:UsersComponent},{path:'userInterface',component:UserInterfaceComponent},
  {path:'viewCustomer',component:AddCustomerComponent},{path:'accounts',component:AccountsComponent},{path:'createcust',component:CreatecustComponent},
  {path:'viewaccounts',component:ViewaccountsComponent},{path:'transaction',component:TransactionComponent},{path:'updatereq',component:UpdatereqComponent},
{path:'addaccount',component:AddaccountComponent},{path:'viewrequest',component:ViewrequestComponent},
{path:'balance',component:BalanceComponent},{path:'viewtransactions',component:ViewtransactionsComponent},{path:'alltransaction',component:AlltransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
