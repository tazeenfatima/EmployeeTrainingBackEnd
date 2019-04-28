import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';

import { listExperience, arrAllSkills } from '../../constants/index';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('allTabs') tabs;
  @ViewChild('tabList') tabList;
  @ViewChildren('drpDownMenu') drpDown;
  @ViewChildren('expDrpDownMenu') expDrpDown;
  userObj = {
    name: 'Tazeen',
    email: 'tazeenlakhani@gmail.com',
    phone: '+92134567890',
    picture: null
  };
  companyObj = {
    name: '',
    title: '',
    experience: null,
    from_date: new Date(),
    to_date: new Date()
  };
  skillObj = {
    name: null,
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
  arrSkills = [];
  requestInProgress: boolean = false;
  showSkills: boolean = false;
  skillIndex = 0;
  showTrainings: boolean = false;
  arrAllSkills = [];
  showExperience: boolean = false;
  allExperience = [];
  isCurrent: boolean = true;
  constructor() { }

  ngOnInit() {
    this.getProfile();
    this.arrExperience = listExperience;
    this.arrAllSkills = arrAllSkills;
  }
  openTab(tabId, event) {
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
    let tabList = this.tabList.nativeElement.children;
    for (var i = 0; i < tabList.length; i++) {
      var attrib = tabList[i];
      if (attrib.getAttribute('data-toggle') == tabId) {
        attrib.classList.add('in', 'active');
      }
      else {
        let allClasses = attrib.classList;
        if (allClasses.contains('active')) {
          attrib.classList.remove('active');
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
      },
      {
        id: 2,
        title: 'Project Management',
        completion_year: '2017',
        duration: '4 months',
        file: null
      }
    ];
    this.arrSkills = [
      {
        name: 'C#',
        experience: '1 Year'
      },
      {
        name: 'MS SQL Server',
        experience: '2 Years'
      },
      {
        name: 'Software Project Management',
        experience: 'Less than 1 year'
      }
    ];
    this.allExperience = [
      {
        id: 1, name: 'Abc', title: 'xyx', experience: '1 Year', from_date: '01/11/2018', to_date: null
      },
      {
        id: 2, name: 'Abcd', title: 'xyx', experience: '1 Year', from_date: '01/11/2017', to_date: '01/11/2018'
      }
    ]
    this.allExperience.map(d => {
      d.from_date = moment(new Date(d.from_date)).format('DD/MM/YYYY');
      if (d.to_date) {
        d.to_date = moment(new Date(d.to_date)).format('DD/MM/YYYY');
      }
      else d['isCurrent'] = true;
      return d;
    })
  }
  updateCompany(companyForm: NgForm) {
    //login through api
    if (!companyForm.valid) {
      console.log('error');
    }
    let values = companyForm.value;
    if (values.isCurrent) {
      values.to_date = null;
    }
    else values.to_date = moment(new Date(values.to_date)).format('DD/MM/YYYY');
    values.from_date = moment(new Date(values.from_date)).format('DD/MM/YYYY');
    console.log('companyForm', values);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  update(userForm: NgForm) {
    console.log('userForm', userForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  editSkill(skillObj, i) {
    this.skillObj = {
      name: skillObj.name,
      experience: skillObj.experience
    }
    this.showSkills = true;
    this.skillIndex = i;
  }
  delSkill(i) {
    this.arrSkills.splice(i, 1);
    this.skillObj = {
      name: null,
      experience: null
    }
    this.showSkills = false;
  }
  updateSkills(skillsForm: NgForm) {
    console.log('companyForm', skillsForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  showSkillsFun() {
    this.showSkills = !this.showSkills;
    this.skillObj = {
      name: null,
      experience: null
    }
  }
  showExpForm() {
    this.showExperience = !this.showExperience;
    this.companyObj = {
      name: '',
      title: '',
      experience: null,
      from_date: new Date(),
      to_date: new Date()
    };
  }
  showTrainingsForm() {
    this.showTrainings = !this.showTrainings;
    this.trainingObj = {
      title: '',
      completion_year: '',
      duration: '',
      file: null
    }
  }
  updateTrainings(TrainingsForm: NgForm) {
    console.log('TrainingsForm', TrainingsForm);
    this.requestInProgress = true;
    this.requestInProgress = false;
  }
  editTraining(trainingObj, i) {
    this.trainingObj = trainingObj; //add id too
    this.showTrainings = true;
  }
  removeTraining(training, i) {
    this.allTrainings.splice(i, 1);
    this.trainingObj = {
      title: '',
      completion_year: '',
      duration: '',
      file: null
    };
    this.showTrainings = false;
    //send id to api
  }
  downloadCertificate(training) {
    //download?
  }
  editCompany(compObj, i) {
    this.companyObj = compObj;
    this.showExperience = true;
  }
  delCompany(company, i) {
    this.allExperience.splice(i, 1);
    this.showExperience = false;
    this.companyObj = {
      name: '',
      title: '',
      experience: null,
      from_date: new Date(),
      to_date: new Date()
    }
  }
  openActionDrpDown(index) {
    this.drpDown._results.forEach(element => {
      let id = element.nativeElement.id;
      if (id == index) {
        if (element.nativeElement.classList.contains('in')) {
          element.nativeElement.classList.remove('in');
          element.nativeElement.style.display = 'none';
        }
        else {
          element.nativeElement.classList.add('in');
          element.nativeElement.style.display = 'block';
        }
      }
    });
  }
  openExperienceActionDrpDown(index) {
    this.expDrpDown._results.forEach(element => {
      let id = element.nativeElement.id;
      if (id == index) {
        if (element.nativeElement.classList.contains('in')) {
          element.nativeElement.classList.remove('in');
          element.nativeElement.style.display = 'none';
        }
        else {
          element.nativeElement.classList.add('in');
          element.nativeElement.style.display = 'block';
        }
      }
    });
  }
}
