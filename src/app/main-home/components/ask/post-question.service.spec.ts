import { TestBed, inject } from '@angular/core/testing';

import { PostQuestionService } from './post-question.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('PostQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
      providers: [PostQuestionService]
  }));

  it('should be created', () => {
    const service: PostQuestionService = TestBed.get(PostQuestionService);
    expect(service).toBeTruthy();
  });

  it('testing http get answers', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [
        {
          qid: 2,
      answer: "The new V3 router has a url property.\n\nthis.router.url === '/login'",
      uid: "1",
      id: 3
        },
        {
          qid: 2,
      answer: "The new V3 router has a url property.\n\nthis.router.url === '/login'",
      uid: "1",
      id: 3
        }
      ];

      postQuesService.getAnswers(2).subscribe(mockData => {
        expect(Object.keys(mockData).length).toBe(2);
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/answers?qid=2');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

  it('testing http get comments', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [
        {
          qid: 1,
      answerID: 2,
      comment: "You should add which selector you add these classes to",
      uid: "1",
      id: 1
        },
        {
          qid: 1,
      answerID: 5,
      comment: "You should add which selector you add these classes to",
      uid: "1",
      id: 1
        }
      ];

      postQuesService.getComments(2) .subscribe(mockData => {
       // expect(Object.keys(mockData).length).toBe(1);
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/comments?answerID=2');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

  it('testing http get userName', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [
        {
          dName: "manogna madineni",
          email: "mm@gmail.com",
          password: "123456",
          id: 2
        },
        {
          dName: "saurin Khedia",
          email: "saurin@gmail.com",
          password: "123456",
          id: 3
        }
      ];
      postQuesService.getUserName(3).subscribe(mockData => {
       // expect(Object.keys(mockData).length).toBe(2);
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/users?id=3');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));
  it('testing http post for question', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [{
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

      postQuesService.postQuestion("Hows to set width of mat-table column in angular?", "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?", [
        "java",
        "angular"
      ], 1).subscribe(mockData => {
       // expect(mockData[0].email).toBe("m@gmail.com");
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/questions');
      expect(req.request.method).toEqual('POST');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

  it('testing http post for answer', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [
        {
          qid: 1,
          answer: "If you're using scss for your styles you can use a mixin to help generate the code. Your styles will quickly get out of hand if you put all the properties every time.\n\nThis is a very simple example - really nothing more than a proof of concept, you can extend this with multiple properties and rules as needed.",
          uid: "1",
          id: 1
        },
        {
          qid: 1,
          answer: "You can do it by using below CSS:\n\ntable {\n  width: 100%;\n  table-layout: fixed;\n}\n\nth, td {\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\nHere is a StackBlitz Example with Sample Data",
          uid: "1",
          id: 2
        }
      ];

      postQuesService.postAnswer(1, "xyzz", "1").subscribe(mockData => {
       // expect(mockData[0].email).toBe("m@gmail.com");
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/answers');
      expect(req.request.method).toEqual('POST');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

  it('testing http post for answer', inject(
    [HttpTestingController, PostQuestionService],
    (httpMock: HttpTestingController, postQuesService: PostQuestionService) => {
      const mockData = [
        {
          qid: 1,
          answerID: 2,
          comment: "You should add which selector you add these classes to",
          uid: "1",
          id: 1
        },
        {
          qid: 1,
          answerID: 1,
          comment: "About time someone upvoted me for this :-) I've found this way very helpful - and you can extend it all you please as needed to be more consistent across components.",
          uid: "1",
          id: 2
        }
      ];

      postQuesService.postComment(1, 2, "test comment",2).subscribe(mockData => {
       // expect(mockData[0].email).toBe("m@gmail.com");
        // expect(mockData[1].length).toBe(11);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/comments');
      expect(req.request.method).toEqual('POST');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData);
    }
  ));

});
