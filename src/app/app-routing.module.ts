import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { CheckComponent } from './check/check.component';
import { HomeComponent } from './home/home.component';
import { QuickComponent } from './quick/quick.component';
import { StaffComponent } from './staff/staff.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},{path:'check',component:CheckComponent},{path:'addUser',component:AddUserComponent},{path:'quick',component:QuickComponent}
  ,{path:'staff',component:StaffComponent},{path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
