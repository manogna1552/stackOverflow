import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionComponent } from './view-question.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';
import { Router } from '@angular/router';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PostQuestionService } from '../ask/post-question.service';
import { of } from 'rxjs';
import { UserNamePipe } from '../../user-name.pipe';

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

// const tags = {
//   value: [
//     "java",
//     "angular"
//   ]
// };


const mockPostQuesSvc= {
  postQuestion:()=>of(postQuesData),
  postAnswer:()=>of(postAnsData),
  getAnswers:()=>of(postAnsData),
  postComment:()=>of(postComData),
  getComments:()=>of(postComData),
  getUserName:()=>of(getUserData)
};

fdescribe('ViewQuestionComponent', () => {
  let component: ViewQuestionComponent;
  let fixture: ComponentFixture<ViewQuestionComponent>;
  let quesSvc: PostQuestionService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuestionComponent,UserNamePipe ],
      imports:[MaterialModule,FormsModule ,BrowserAnimationsModule,ReactiveFormsModule, MatSelectModule],
      providers:[{provide: PostQuestionService, useValue: mockPostQuesSvc},
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      ],schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    var store ={}
    fixture = TestBed.createComponent(ViewQuestionComponent);
    component = fixture.componentInstance;
    quesSvc= TestBed.get(PostQuestionService);
    router =TestBed.get(Router);
   // localStorage.setItem('userId',JSON.stringify(3));
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
  // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('post answer', () => {
    localStorage.setItem('userId',JSON.stringify(1));
    localStorage.setItem('row',JSON.stringify({
      qTitle: "How to set width of mat-table column in angular?",
      qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
      tags: [
        "java",
        "angular"
      ],
      uid: 1,
      id: 1
    }))
    //component.ans ="hello"
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });
  it('post answer', () => {
    component.postAnswer(testForm)
    expect(router.navigate).toHaveBeenCalledWith(["/afterLogin"]);
   });
   it('post comment', () => {
    component.postComment(2);
    expect(router.navigate).toHaveBeenCalledWith(["/view"]);
   });
});
