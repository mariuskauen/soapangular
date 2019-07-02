import { Component, OnInit } from '@angular/core';
import { FriendService } from '../_services/friend.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: any = {};

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.loadFriends();
  }
loadFriends() {
  this.friendService.getMyFriends().subscribe(response => {
    this.friends = response;
    console.log(this.friends);
  }, error => {
    console.log(error);
  });
}
}
