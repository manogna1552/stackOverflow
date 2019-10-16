import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

fdescribe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [LoginService]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('testing http get', inject(
    [HttpTestingController, LoginService],
    (httpMock: HttpTestingController, loginPageService: LoginService) => {
      const mockData = [
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

      loginPageService.getUserDetails().subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(2);
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/users');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

});
