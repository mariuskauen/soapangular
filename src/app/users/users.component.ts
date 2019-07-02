import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }
}
