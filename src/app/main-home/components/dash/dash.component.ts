import { Component, OnInit } from '@angular/core';
import { GetQuestionService} from './get-question.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  ques:any;
  qTitle
  qBody
  tags

  constructor(private getQuesService:GetQuestionService) {
   

   }

  ngOnInit() {
    console.log("ng init")
    this.getQuesService.getQuestions().subscribe((data)=>{
     // this.ques = data;
     // console.log(this.ques," dash get ques")
      
      console.log(data)
      this.ques = data;
      console.log(data,"....data...")
      this.ques.forEach((element) => {
        this.qTitle=element.qTitle
        this.qBody=element.qBody
        this.tags= element.tags
        console.log("elemet",element.qTitle)
        console.log("elemet",element.qBody)
        console.log("elemet",element.tags)
          
      })
    })
  }


}
