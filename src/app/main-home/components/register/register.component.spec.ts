import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { of, throwError } from 'rxjs';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';


const fakeUserData = [
  {
    dName: "manu1552",
      email: "m@gmail.com",
      password: "123456",
      id: 1
  }
];

const mockRegPageSvc= {
  getUserDetails: () => of(fakeUserData),
  postUserDetails:() => of(fakeUserData)
};
// class mockRegPageSvc {
 
//   postUserDetails(){
//     return  of(fakeUserData);
//   }
//   getUserDetails(){
//     return  of(fakeUserData);
 
// }
//    };

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let regPageSvc: RegisterService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[MaterialModule, BrowserAnimationsModule],
      providers:[{provide: RegisterService, useValue: mockRegPageSvc},
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      ],schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    regPageSvc = TestBed.get(RegisterService);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should navigate to home on successful reg', async () => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    fixture.detectChanges();
    // act
   var spy= spyOn(regPageSvc,'postUserDetails').and.callThrough();
    component.onPost();
    expect(spy).toHaveBeenCalled();
   // fixture.detectChanges();
    // assert
    //expect(component.users.length).toBe(2);
    expect(router.navigate).toHaveBeenCalledWith(['/home']);

  });

  it('Form should throw new exception', async() => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    spyOn(regPageSvc,'postUserDetails').and.returnValue(throwError({status: 404}));
    var spy = spyOn(component,'handleError').and.callThrough();
    // act
    component.onPost();
    fixture.detectChanges();
    // assert
    expect(spy).toHaveBeenCalled();
  });

  it('if user exists ', async() => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    // act
    component.register();
    fixture.detectChanges();
    // assert
    expect(component.email).toBeTruthy();
  });

  it('if user doesnot exists ', async() => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = undefined;
    component.password = undefined;
    // act
    component.register();
    fixture.detectChanges();
    // assert
   expect(component.email).toBeFalsy();
  });
});
