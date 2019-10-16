import { Component, OnInit } from '@angular/core';
import { UserSpecificService } from '../user-specific.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss']
})
export class UserAnswersComponent implements OnInit {
  id; //userid
  answers: any;//answers specific to user
  ansQues: any; //question answer specific to user
  qTitle: any;
  qBody: any;
  tags: any;
  displayedColumns: string[];
  dataSource: any;

  constructor(private userSpecificService:UserSpecificService, private router:Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('userId');
    this.viewUserAnswers();
  }

  viewUserAnswers() {
   
    this.userSpecificService.getUserAnswers(this.id).subscribe(data=>{
      console.log(data," user specific answers")
      this.answers=data;
      console.log(this.answers,"answers.......")
      this.answers.forEach((element) => {
        console.log(element.qid,"qid...")
        this.userSpecificService.getUserQuesId(element.qid).subscribe(data=>{
         // this.ansQues =data;
         console.log(this.ansQues," ans ques....")
          this.ansQues.push(data);
          
        })
          
      });
      console.log(this.ansQues,"answers.......")
      this.ansQues.forEach((element) => {
        this.qTitle=element.qTitle
        this.qBody=element.qBody
        this.tags= element.tags
        this.displayedColumns = ['qTitle', 'tags'];
      this.dataSource= new MatTableDataSource(this.ansQues);
          
      })

    })
      }
      getRecord(row){
        //console.log("row..",row)
        localStorage.setItem('row', JSON.stringify(row));
        this.router.navigate(['/view']);
          }
}
