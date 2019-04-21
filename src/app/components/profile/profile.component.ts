import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { listExperience } from '../../../constants/index';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('allTabs') tabs;
  @ViewChild('drpDownMenu') drpDown;
  userObj = {
    name: 'Tazeen',
    email: 'tazeenlakhani@gmail.com',
    phone: '+92134567890',
    picture: null
  };
  companyObj = {
    name: '',
    title: '',
    experience: null
  };
  skillObj = {
    name: '',
    experience: null
  };
  trainingObj = {
    title: '',
    completion_year: '',
    duration: '',
    file: null
  };
  arrExperience = [];
  allTrainings = [];
  requestInProgress: boolean = false;
  showSkills: boolean = false;
  skillIndex = 0;
  showTrainings: boolean = false;
  constructor() { }

  ngOnInit() {
    this.getProfile();
    this.arrExperience = listExperience;
  }
  openTab(tabId, event) {
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
        if (allClasses.contains('in')) {
          attrib.classList.remove('in', 'active');
        }
      }
    }
  }

  getProfile() {
    //get api
    //this.userObj
    //this.companyObj
    this.allTrainings = [
      {
        id: 1,
        title: 'Agile Certification',
        completion_year: '2018',
        duration: '3 months',
        file: null
      }
    ]
    this.arrSkills = [
      {
        name: 'C#',
        experience: '1 Year'
      },
      {
        name: 'Angular',
        experience: '2 Years'
      },
      {
        name: '.NET Development',
        experience: '2 Years'
      }
    ]
  }
  updateCompany(companyForm: ngForm){
    //login through api

    console.log('companyForm', companyForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  update(userForm: ngForm){
    console.log('userForm', userForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  editSkill(skillObj, i){
    this.skillObj = {
      name : skillObj.name,
      experience : skillObj.experience
    }
    this.showSkills = true;
    this.skillIndex = i;
  }
  delSkill(i){
    this.arrSkills.splice(i);
    this.skillObj = {
      name : '',
      experience : null
    }
  }
  updateSkills(skillsForm: ngForm){
    console.log('companyForm', skillsForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  showSkillsFun(){
    this.showSkills = !this.showSkills;
    this.skillObj = {
      name : '',
      experience : null
    }
  }
  showTrainingsForm(){
    this.showTrainings = !this.showTrainings;
    this.trainingObj = {
      title: '',
      completion_year: '',
      duration: '',
      file: null
    }
  }
  updateTrainings(TrainingsForm: ngForm){
      console.log('TrainingsForm', TrainingsForm);
      this.requestInProgress = true;
      this.requestInProgress = false;
    }
  editTraining(trainingObj, i){
    this.trainingObj = trainingObj; //add id too
    this.showTrainings = true;
  }
  removeTraining(training, i){
    this.allTrainings.splice(i);
    //send id to api
  }
  downloadCertificate(training){
    //download?
  }
  openActionDrpDown(){
    if(this.drpDown.nativeElement.classList.contains('in')){
      this.drpDown.nativeElement.classList.remove('in');
    }
    else this.drpDown.nativeElement.classList.add('in')
  }
}
