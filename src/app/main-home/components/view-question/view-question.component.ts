import { Component, OnInit } from '@angular/core';
import { PostQuestionService } from '../ask/post-question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit {
  id: unknown;
  qTitle: unknown;
  qBody: unknown;
  tags: any;
  ans:any;
 answers = [];

  constructor(private postQuesService:PostQuestionService, private router: Router) { }

  ngOnInit() {
    const question = JSON.parse(localStorage.getItem('row'));
    console.log("insdie view", question)
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
    this.viewAnswer();
  }
  postAnswer(){
    this.postQuesService.postAnswer(this.id,this.ans).subscribe(data=>{console.log("success")})
    this.router.navigate(['/view']);
    location.reload();
  }

  viewAnswer(){
    this.postQuesService.getAnswers(this.id).subscribe((data:any) =>{
      console.log(data)
     //this.answers = data;
     data.forEach((element) => {
      this.answers.push(element.answer) 
     })

    })
  }

}
