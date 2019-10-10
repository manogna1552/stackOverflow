import { Component, OnInit } from '@angular/core';
import { UserSpecificService } from '../user-specific.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss']
})
export class UserQuestionsComponent implements OnInit {
  id: unknown;
  questions:any;
  qTitle: any;
  qBody: any;
  tags: any;
  displayedColumns: string[];
  dataSource: any;

  constructor(private userSpecificService:UserSpecificService, private router:Router) { }

  ngOnInit() {
    //console.log('***before**');
   this.id = localStorage.getItem('userId');
    this.viewUserQuestions();
  }

  viewUserQuestions() {
   
this.userSpecificService.getUserQuestions(this.id).subscribe(data=>{
  console.log(data," user specific answers")
  this.questions=data;
  this.questions.forEach((element) => {
    this.qTitle=element.qTitle
    this.qBody=element.qBody
    this.tags= element.tags
    this.displayedColumns = ['qTitle', 'tags'];
  this.dataSource = new MatTableDataSource(this.questions);
      
  })
})
  }

  // viewUserAnswers() {
   
  //   this.userSpecificService.getUserAnswers(this.id).subscribe(data=>{
  //     console.log(data," user specific answers")
  //     this.questions=data;
  //     this.questions.forEach((element) => {
  //       this.qTitle=element.qTitle
  //       this.qBody=element.qBody
  //       this.tags= element.tags
  //       this.displayedColumns = ['qTitle', 'tags'];
  //     this.dataSource = new MatTableDataSource(this.questions);
          
  //     })
  //   })
  //     }

  getRecord(row){
    //console.log("row..",row)
    localStorage.setItem('row', JSON.stringify(row));
    this.router.navigate(['/view']);
      }


}
