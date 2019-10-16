import { TestBed, inject } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RegisterService]
    
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });

  it('testing http post for user details', inject(
    [HttpTestingController, RegisterService],
    (httpMock: HttpTestingController, registerService: RegisterService) => {
      const mockData = [
        {
          dName: "manu1552",
          email: "m@gmail.com",
          password: "123456",
          id: 1
        }
      ];

      registerService.postUserDetails("manu1552","m@gmail.com","123456").subscribe(mockData => {
        expect(mockData[0].email).toBe("m@gmail.com");
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/users');
      expect(req.request.method).toEqual('POST');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

  it('testing http get for user details', inject(
    [HttpTestingController, RegisterService],
    (httpMock: HttpTestingController, registerService: RegisterService) => {
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

      registerService.getUserDetails().subscribe(mockData => {
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
