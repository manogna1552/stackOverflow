import { Component, OnInit } from '@angular/core';
import { Angular2CsvComponent, Angular2CsvService } from 'angular2-csv';
import { CsvService } from '../../csv.service';
import { GetQuestionService } from '../dash/get-question.service';
//import { Angular2Csv } from 'angular2-csv/Angular2-csv';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
 

  constructor(private appService:CsvService,private getQuesService:GetQuestionService) { }

  jsonData
  //dtHolidays :any;
  ngOnInit() {
    this.getQuesService.getQuestions().subscribe((data)=>{
      console.log(data,"json d....")
      this.jsonData = data;
    })

    // this.dtHolidays =[
    //   {"id": 101, "Holiday_Date": "21/02/2019", "Holiday_Comment": "company holiday calendar of 2019. ", "Holiday_Status": "Active"},
    //   {"id": 102, "Holiday_Date": "22/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 103, "Holiday_Date": "23/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
    //   {"id": 104, "Holiday_Date": "24/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 105, "Holiday_Date": "25/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
    //   {"id": 106, "Holiday_Date": "26/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 107, "Holiday_Date": "27/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Pending"},
    //   {"id": 108, "Holiday_Date": "28/02/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 109, "Holiday_Date": "02/03/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "NotActive"},
    //   {"id": 110, "Holiday_Date": "03/04/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"},
    //   {"id": 111, "Holiday_Date": "21/05/2019", "Holiday_Comment": "company holiday calendar of 2019.", "Holiday_Status": "Active"}
    // ]; 

  }
  

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your Holiday List :',
    useBom: true,
    noDownload: false,
    headers: ['qTitle','qBody', 'tags', 'uid', 'id']
  };
  downloadCSV(){
    //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
    new  AngularCsv(this.jsonData, "", this.csvOptions);
  }
  // options = {
  //   fieldSeparator: ',',
  //   quoteStrings: '"',
  //   decimalseparator: '.',
  //   showLabels: false,
  //   // headers: ['column 1 header', 'column 2 header'],
  //   showTitle: true,
  //   title: 'asfasf',
  //   useBom: false,
   
  //   removeNewLines: true,
  //   keys: ['approved','age','name' ],
  //   useKeysAsHeaders: true
  // };
  // data = [
  //   {
  //     name: "Test, 1",
  //     age: 13,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   },
  //   {
  //     name: 'Test 2',
  //     age: 11,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   },
  //   {
  //     name: 'Test 3',
  //     age: 10,
  //     average: 8.2,
  //     approved: true,
  //     description: "using 'Content here, content here' "
  //   }
  // ];

  

  // jsonData =  [
  //   {
  //     name: "Anil Singh",
  //     age: 33,
  //     average: 98,
  //     approved: true,
  //     description: "I am active blogger and Author."
  //   },
  //   {
  //     name: 'Reena Singh',
  //     age: 28,
  //     average: 99,
  //     approved: true,
  //     description: "I am active HR."
  //   },
  //   {
  //     name: 'Aradhya',
  //     age: 4,
  //     average: 99,
  //     approved: true,
  //     description: "I am engle."
  //   },
  // ];
  // download(){
  //   this.appService.downloadFile(this.jsonData, 'jsontocsv');
  // }


}
