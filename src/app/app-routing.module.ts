import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ValuesComponent } from './values/values.component';
import { RequestsComponent } from './requests/requests.component';
import { FriendsComponent } from './friends/friends.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'values', component: ValuesComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'users', component: UsersComponent }
];
