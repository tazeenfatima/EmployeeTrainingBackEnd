import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('allTabs') tabs;
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
  openTab(tabId, event) {
    console.log('tabId', event.target.parentElement.parentElement.children);
    for (var i = 0; i < event.target.parentElement.parentElement.children.length; i++) {
      var attrib = event.target.parentElement.parentElement.children[i];
      if (attrib.classList.contains('active')) {
        attrib.classList.remove('active');
      }
    }
    event.target.parentElement.classList.add('active');

    let allTabs = this.tabs.nativeElement.children;
    for (var i = 0; i < allTabs.length; i++) {
      var attrib = allTabs[i];
      if (attrib.id == tabId) {
        attrib.classList.add('in', 'active');
      }
      else {
        let allClasses = attrib.classList;
        console.log('allC',allClasses)
        if (allClasses.contains('in')) {
          attrib.classList.remove('in', 'active');
        }
      }
    }
  }

  getProfile() {
    //get api
    //this.userObj
  }
}
