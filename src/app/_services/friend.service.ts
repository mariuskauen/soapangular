import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class FriendService {

constructor(private http: HttpClient) { }

getRequests() {
  return this.http.get('http://localhost:34281/api/friend/getothersrequests', httpOptions);
}

acceptRequest(requestId) {
  return this.http.post('http://localhost:34281/api/friend/acceptfriend/' + requestId, null, httpOptions);
}
getMyFriends() {
  return this.http.get('http://localhost:34281/api/friend/getallmyfriends', httpOptions);
}
}
