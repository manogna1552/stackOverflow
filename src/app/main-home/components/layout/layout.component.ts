import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationStart } from '@angular/router';
import { EventEmitterServiceService } from '../../event-emitter-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showHead: boolean = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  dName: unknown;
  email: unknown;
  password: unknown;
  id: unknown;
  user

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,private eventEmitterService: EventEmitterServiceService  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   // this.mobileQuery.addListener(this._mobileQueryListener);
   
   router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event['url'] == '/login' || event['url'] == '/register' || event['url'] == '/home' ) {
        this.showHead = false;
      } else {
        this.showHead = true;
        this.getUser();
      }
    }
  });
    
  
  //this.getUser();


  }

  ngOnInit() {
    this.getUser();
  }

  logout(){
    localStorage.removeItem('testObject');
    this.router.navigate(['/home']);
  }

  getUser(){
    this. user = JSON.parse(localStorage.getItem('testObject'));
    if (this.user == undefined) {
      alert(' Access Denied, User not defined');
      this.logout();
    } else {
      console.log(this.user, 'success');
      
    }

  }

}
