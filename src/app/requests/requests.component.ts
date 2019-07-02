import { Component, OnInit } from '@angular/core';
import { FriendService } from '../_services/friend.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  requests: any = {};

  constructor(private friendService: FriendService) { }

  ngOnInit() {
    this.loadRequests();
  }

  loadRequests() {
    this.friendService.getRequests().subscribe(response => {
      this.requests = response;
      console.log(this.requests);
    }, error => {
      console.log(error);
    });
  }

  acceptFriend(requestId) {
    this.friendService.acceptRequest(requestId).subscribe(response => {
      this.loadRequests();
      console.log('Accepted ' + requestId);
    }, error => {
      console.log(error);
    });

  }

  denyFriend(requestId) {
    console.log('Denied ' + requestId);
  }

}
