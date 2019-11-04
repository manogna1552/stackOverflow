import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { GetQuestionService } from './get-question.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const getQuesData = [
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

const testRow ={
  qTitle: "How to set width of mat-table column in angular?",
  qBody: "Here in my mat-table have 6 column when any column has not more words then it looks like Image-1, but when any column has more words then UI looks like Image-2, so how to set UI like Image-1 when any column has more words in angular 6 ?",
  tags: [
    "java",
    "angular"
  ],
  uid: 1,
  id: 1
}


const mockgetQuesSvc= {
  getQuestions:()=>of(getQuesData)
  
};

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;
  let quesSvc: GetQuestionService;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashComponent ],
      imports:[MaterialModule,FormsModule ,BrowserAnimationsModule,ReactiveFormsModule, MatSelectModule],
      providers:[{provide: GetQuestionService, useValue: mockgetQuesSvc},
        {provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); }},
      ],schemas: [ NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    var store ={}
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
  //  fixture.detectChanges();
  quesSvc= TestBed.get(GetQuestionService);
  router = TestBed.get(Router);

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ng on init',()=>{
    component.ngOnInit();
    expect(component.ques).toBeDefined();
  })
  it('get row to be called',()=>{

    component.getRecord(testRow);
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(["/view"]);
  //  expect(component.ques).toBeDefined();
  })

 // it('gfilter value to be called',()=>{
  
  //  component.applyFilter("angular")
   // fixture.detectChanges();
   // expect(component.dataSource.filter).toBe("angular");
  //  expect(component.ques).toBeDefined();
 // })
});