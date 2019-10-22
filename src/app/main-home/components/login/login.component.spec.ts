import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { of, throwError } from 'rxjs';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const fakeUserData = [
  {
    dName: "manu1552",
      email: "m@gmail.com",
      password: "123456",
      id: 1
},
{
  dName: "manogna madineni",
  email: "mm@gmail.com",
  password: "123456",
  id: 2
}
];
const mockLogInPageSvc = {
  getUserDetails: () => of(fakeUserData)
};
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let logInPageSvc: LoginService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[MaterialModule, BrowserAnimationsModule],
      providers:[{provide: LoginService, useValue: mockLogInPageSvc},
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      ],schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    logInPageSvc = TestBed.get(LoginService);
    router = TestBed.get(Router);
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('Form should be invaliod onInit', async () => {
  //   // arrange
  //   fixture.detectChanges();
  //   // assert
  //   expect(component.email).toBe(undefined);
  //   expect(component.password).toBe(undefined);
  // });

  it('Form should navigate to dashboard on successful login', async () => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    fixture.detectChanges();
    // act
    component.login();
    fixture.detectChanges();
    // assert
    expect(component.users.length).toBe(2);
    expect(router.navigate).toHaveBeenCalledWith(['/afterLogin']);

  });

  it('Form should display error message saying EmailId/ Password is not entered.', async() => {
    // arrange
    fixture.detectChanges();
    // set form modal
    component.email = undefined;
    component.password = undefined;
    fixture.detectChanges();
    // act
    component.login();
    fixture.detectChanges();
    // assert
    expect(component.email).toBeFalsy();
    expect(component.password).toBeFalsy();
  });

  it('Form should throw new exception', async() => {
    // arrange
    fixture.detectChanges();
    // set form model
    component.email = fakeUserData[0].email;
    component.password = fakeUserData[0].password;
    spyOn(logInPageSvc,'getUserDetails').and.returnValue(throwError({status: 404}));
    var spy = spyOn(component,'handleError').and.callThrough();
    // act
    component.login();
    fixture.detectChanges();
    // assert
    expect(spy).toHaveBeenCalled();
  });

});
