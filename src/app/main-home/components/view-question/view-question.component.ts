import { Component, OnInit } from '@angular/core';
import { PostQuestionService } from '../ask/post-question.service';
import { Router } from '@angular/router';

import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss'],
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class ViewQuestionComponent implements OnInit {
  id: unknown;
  qTitle: unknown;
  qBody: unknown;
  tags: any;
  ans: any;
  answers = [];
  comment
  answerIds = [];
  all: any;
  com = [];
  userId;
  count: any;
  ansName = [];
  filteredArr: any[];


  constructor(private postQuesService: PostQuestionService, private router: Router) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId');
    const question = JSON.parse(localStorage.getItem('row'));

    Object.entries(question).forEach(([key, value]) => {
      switch (key) {
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
          this.tags = value
          break;
      }
    })
    this.viewAnswer();


  }
  postAnswer(form: NgForm) {
    this.ans = form.value.name
    this.postQuesService.postAnswer(this.id, this.ans, this.userId).subscribe(
      data => {
        console.log("success")
      });
    this.router.navigate(['/afterLogin']);
  }

  viewAnswer() {
    this.postQuesService.getAnswers(this.id).subscribe((data: []) => {
      // console.log(data," view answers")
      this.all = data;
      this.count = this.all.length;

      this.all.forEach(data => {

        this.viewComment(data.id)
        this.viewUserName(data.uid);

      });

    })

  }
  postComment(answerID) {
    this.postQuesService.postComment(this.id, answerID, this.comment, this.userId).subscribe(data => { console.log("success") })
    this.router.navigate(['/afterLogin']);
   // location.reload();
  }

  viewComment(ansid) {

    this.postQuesService.getComments(ansid).subscribe((data: any) => {
      // console.log(data," viewcomments")
      // console.log(data[0],"ans id ")
      data.forEach((element) => {
        if (element != undefined) {
          this.com.push(element);
        }
      });
    })

  }

  viewUserName(uid) {
    this.postQuesService.getUserName(uid).subscribe((data: any) => {
      //this.userDet=data
      data.forEach(data => {
        if (this.ansName.indexOf(data.id) == -1)
          this.ansName.push(data);
      });
    })
  }

}
