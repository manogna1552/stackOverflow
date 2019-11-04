import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RoutesRecognized, RouterStateSnapshot, NavigationEnd, NavigationStart } from '@angular/router';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Observable ,of} from 'rxjs';


// class MockServices {
//    Router
//   public events = of( new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login'));
// }
class MockServices {
  url ='/afterLogin';
  navigate = jasmine.createSpy('navigate');
  start = new NavigationStart(0, '/afterLogin');
  end = new NavigationEnd(1, '/login', '/login');
  events = new Observable(observer => {
    observer.next(this.start),  
    observer.next(this.end), 
    observer.next(this.url)
    observer.complete();
  });  
}

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      imports:[MaterialModule,FormsModule ,BrowserAnimationsModule,ReactiveFormsModule],
      providers:[{provide: Router, useClass: MockServices},
      ],schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('flag check ', () => {
   // component.showHead = false
   
    expect(component.showHead ).toBeFalsy();
    expect(component.user).toBeNull();
  });
});
