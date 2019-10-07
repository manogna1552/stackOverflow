import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostQuestionService } from './post-question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
qTitle
qBody
tags
tagsList : String[]

  constructor(private postQuesService:PostQuestionService, private router: Router) { }

  ngOnInit() {
  this.tags = new FormControl();
  this.tagsList = ['java', 'angular', 'c', 'c++', 'java Script', 'ReactJs' ];
  console.log(this.tags)
  }
  asking(){
    console.log(this.tags.value)
    this.postQuesService.postQuestion(this.qTitle,this.qBody,this.tags.value).subscribe(data =>{
      alert("post Sucessful !!");
      this.router.navigate(['/afterLogin']);
    })
  }

}
