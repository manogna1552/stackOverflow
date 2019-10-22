import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskComponent } from './ask.component';
import { PostQuestionService } from './post-question.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import { of } from 'rxjs';
//import { Observable,of } from 'rxjs';


const postQuesData = [
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
    qTitle: "How to set width of mat-tabjhjle column in angular?",
    qBody: "Here in my mat-table have klh6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
   tags:undefined,
    uid: 1,
    id: 2
  }
];

const postAnsData = [
  {
    qid: 1,
    answer: "If you're using scss for your styles you can use a mixin to help generate the code. Your styles will quickly get out of hand if you put all the properties every time.\n\nThis is a very simple example - really nothing more than a proof of concept, you can extend this with multiple properties and rules as needed.",
    uid: "1",
    id: 1
  }
];
const postComData = [
  {
    qid: 1,
    answerID: 2,
    comment: "You should add which selector you add these classes to",
    uid: "1",
    id: 1
  }
];

const getUserData =[
  {
    dName: "manu1552",
    email: "m@gmail.com",
    password: "123456",
    id: 1
  }
]

const testForm = <NgForm>{
  value: {
      name: "Hello",
      category: "World"
  }
};

const tags = {
  value: [
    "java",
    "angular"
  ]
};


const mockPostQuesSvc= {
  postQuestion:()=>of(postQuesData),
  postAnswer:()=>of(postAnsData),
  getAnswers:()=>of(postAnsData),
  postComment:()=>of(postComData),
  getComments:()=>of(postComData),
  getUserName:()=>of(getUserData)
};
describe('AskComponent', () => {
  let component: AskComponent;
  let fixture: ComponentFixture<AskComponent>;
  let quesSvc: PostQuestionService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskComponent ],
      imports:[MaterialModule,FormsModule ,BrowserAnimationsModule,ReactiveFormsModule, MatSelectModule],
      providers:[{provide: PostQuestionService, useValue: mockPostQuesSvc},
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      ],schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    var store = {};
    fixture = TestBed.createComponent(AskComponent);
    component = fixture.componentInstance;
    quesSvc= TestBed.get(PostQuestionService);
    //fixture.detectChanges();
    localStorage.setItem('testObject',JSON.stringify({
      qTitle: "How to set width of mat-table column in angular?",
      qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
      tags: [
        "java",
        "angular"
      ],
      uid: 1, 
      id: 1
    }));
    spyOn(localStorage, "setItem").and.callFake(
      (key: string, value: string): string => {
        return (store[key] = <string>value);
      }
    );

    spyOn(localStorage, 'getItem').and.callFake( (key:string):string => {
      return store[key] || null;
     });

     spyOn(localStorage, 'removeItem').and.callFake((key:string):void =>  {
      delete store[key];
    });

  });

  it('testing ngOnInit', () => {
    localStorage.setItem('testObject',JSON.stringify({
      qTitle: "How to set width of mat-table column in angular?",
      qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
      tags: [
        "java",
        "angular"
      ],
      uid: 1,
      id: 1
    }));
    component.ngOnInit();
    expect(component.tagsList).toBeDefined();
  });

  it("checking asking",() => {
   // fixture.detectChanges();
   localStorage.setItem('testObject',JSON.stringify({
    qTitle: "11How to set width of mat-tabjhjle column in angular?",
    qBody: "Here in my mat-table have klh6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
    tags: [
      "java",
      "angular"
    ],
    uid: 1,
    id: 2
  }));
   component.ngOnInit();
   // var spy= spyOn(quesSvc,'postQuestion').and.callThrough;

   component.asking(testForm);
   expect(component.tags).toEqual([
    "java",
    "angular"
  ]);
   //expect(spy).toHaveBeenCalled();
   //expect(subsc)
   //expect(router.navigate).toHaveBeenCalledWith(["/afterLogin"]);
  });

  
//it('checking object on ngoinit',()=>{
    // localStorage.setItem('testObject',JSON.stringify({
    //   qTitle: "How to set width of mat-table column in angular?",
    //   qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
    //   tags: [
    //     "java",
    //     "angular"
    //   ],
    //   uid: 1,
    //   id: 1
    // }));

    //fixture.detectChanges();

 // })
  // it('checking user defined ngOnInit', () => {
  //   localStorage.setItem(
  //     "testObject",
  //     JSON.stringify({
  //       qTitle: "How to set width of mat-table column in angular?",
  //       qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
  //       tags: [
  //         "java",
  //         "angular"
  //       ],
  //       uid: 1,
  //       id: 1
  //     })
  //   );
  //   fixture.detectChanges();
    // expect(component.emailId).toBe('tom@gmail.com')
    // expect(component.firstName).toBe('tom')
    // expect(component.lastName).toBe('holleren')

  // });

});
