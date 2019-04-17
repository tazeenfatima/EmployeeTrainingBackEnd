import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userObj = {
    name: 'Tazeen',
    email: 'tazeenlakhani@gmail.com',
    phone: '+92134567890',
    picture: null
  }
  constructor() { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    //get api
    //this.userObj 
  }
}
