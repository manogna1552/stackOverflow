import { Component, OnInit } from '@angular/core';
import { GetQuestionService} from './get-question.service';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

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
  dataSource: any;
  displayedColumns: any;

  constructor(private getQuesService:GetQuestionService, private router:Router) {
   

   }

  ngOnInit() {
    console.log("ng init")
    this.getQuesService.getQuestions().subscribe((data)=>{
      this.ques = data;
      this.ques.forEach((element) => {
        this.qTitle=element.qTitle
        this.qBody=element.qBody
        this.tags= element.tags
        // console.log("elemet",element.qTitle)
        // console.log("elemet",element.qBody)
        // console.log("elemet",element.tags)
        this.displayedColumns = ['qTitle', 'tags'];
      this.dataSource = new MatTableDataSource(this.ques);
          
      })
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getRecord(row){

//console.log("row..",row)
localStorage.setItem('row', JSON.stringify(row));
this.router.navigate(['/view']);
  }
}
