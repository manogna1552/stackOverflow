import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionService {

  constructor(private http : HttpClient) { }
  getQuestions(){ 

    const Headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get('http://localhost:3000/questions',{ headers: Headers })   

  }
}
// export class Ques {
//   qTitle: any;
//   qBody: any;
//   tags: any;
// }