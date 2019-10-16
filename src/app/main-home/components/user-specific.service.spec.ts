import { TestBed, inject } from '@angular/core/testing';

import { UserSpecificService } from './user-specific.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('UserSpecificService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [UserSpecificService]
  }));

  it('should be created', () => {
    const service: UserSpecificService = TestBed.get(UserSpecificService);
    expect(service).toBeTruthy();
  });
  it('testing http get questions with userid', inject(
    [HttpTestingController, UserSpecificService],
    (httpMock: HttpTestingController, userService: UserSpecificService) => {
      const mockData = [
        {
          qTitle: "How to set width of mat-table column in angular?",
          qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
          tags: [
            "java",
            "angular"
          ],
          uid: 1,
          id: 1
        },
        {
          qTitle: "How to get current route",
          qBody: "The current docs only talk about getting route params, not the actual route segments.\n\nFor example, if i want to find the parent of current route, how is that possible?",
          tags: [
            "angular",
            "java Script",
            "ReactJs"
          ],
          uid: 1,
          id: 2
        }
      ];

      userService.getUserQuestions(1).subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(2);
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/questions?uid=1');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));
});
