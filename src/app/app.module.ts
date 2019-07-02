import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ValuesComponent } from './values/values.component';
import { RequestsComponent } from './requests/requests.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendService } from './_services/friend.service';
import { UsersComponent } from './users/users.component';
import { UserService } from './_services/user.service';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      ValuesComponent,
      RequestsComponent,
      FriendsComponent,
      UsersComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      FormsModule
   ],
   providers: [
      AuthService,
      FriendService,
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
