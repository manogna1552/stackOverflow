import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostQuestionService {

  constructor(private http:HttpClient) { }
  postQuestion(qTitle, qBody, tags) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qTitle:qTitle,
          qBody:qBody,
          tags:tags,
    
};
return this.http.post(`http://localhost:3000/questions`, postData)
}

postAnswer(qid, answer) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qid:qid,
          answer:answer,
    
};
return this.http.post(`http://localhost:3000/answers`, postData)
}

getAnswers(id) {
  return this.http.get(`http://localhost:3000/answers?qid=${id}`)
}

}
