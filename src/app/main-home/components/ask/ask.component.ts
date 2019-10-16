import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { PostQuestionService } from './post-question.service';
import { Router } from '@angular/router';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AskComponent implements OnInit {
qTitle
qBody:any
tags
tagsList : String[]
id: unknown;
  fval: any;

  constructor(private postQuesService:PostQuestionService, private router: Router) { }

  ngOnInit() {
  this.tags = new FormControl();
  this.tagsList = ['java', 'angular', 'c', 'c++', 'java Script', 'ReactJs' ];
  console.log(this.tags)
  const question = JSON.parse(localStorage.getItem('testObject'));
    console.log("insdie view ask", question)
    Object.entries(question).forEach( ([key, value]) => {
      switch(key) {
        case "id":
            this.id = value
            break;
        case "qTitle":
              this.qTitle = value
              break;
        case "qBody":
              this.qBody = value
              break;
        case "tags":
              this.tags= value
              break;
      }
    })
    console.log(this.id," user id in ask")
    console.log()
  }
  asking(form: NgForm){
    //alert(form.value.name);
    console.log(form.value.name)
    this.qBody=form.value.name
    this.postQuesService.postQuestion(this.qTitle,this.qBody,this.tags.value,this.id).subscribe(data =>{
   //   alert("post Sucessful !!");
     this.router.navigate(['/afterLogin']);
    })
  }

}
