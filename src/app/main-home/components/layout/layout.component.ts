import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showHead: boolean = false;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
   // this.mobileQuery.addListener(this._mobileQueryListener);
  //  router.events.forEach((event) => {
  //   if (event instanceof NavigationStart) {
  //     if (event['url'] == '/login') {
  //       this.showHead = false;
  //     } else {
  //       this.showHead = true;
  //     }
  //   }
  // });

  }


  ngOnInit() {
  }

  logout(){
    //this.showHead = false
    this.router.navigate(['/home']);
    
    
    
  
  }

}
