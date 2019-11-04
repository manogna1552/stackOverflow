import { Component, OnInit } from '@angular/core';

import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showHead: boolean = false;

  dName: unknown;
  email: unknown;
  password: unknown;
  id: unknown;
  user

  constructor(private router: Router) {
   
   
   const path = this.router.url;

   if (path == '/login' || path == '/register' || path == '/home' ) {
    this.showHead = false;
  } else if(path == '/afterLogin'){
    this.showHead = true;
  }else
  {
    this.showHead = true;
    this.getUser();
  }
  

   router.events.forEach((event) => {

    if (event instanceof NavigationStart) {
      let path = event['url'];
      if (path == '/login' || path == '/register' || path == '/home' ) {
        this.showHead = false;
      } else if(path == '/afterLogin'){
        this.showHead = true;
      }else
      {
        this.showHead = true;
        this.getUser();
      }
      
    }
  });
  }

  ngOnInit() {
    this.getUser();
  }

  logout(){
    localStorage.removeItem('testObject');
    this.router.navigate(['/home']);
    this.showHead = false;
  }

  getUser(){
    this. user = JSON.parse(localStorage.getItem('testObject'));
    if (this.user == undefined) {
     // alert(' Access Denied, User not defined');
      this.logout();
    } else {
      console.log(this.user, 'success');
      
    }

  }

}