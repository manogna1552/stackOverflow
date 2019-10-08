import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostQuestionService {

  constructor(private http:HttpClient) { }
  postQuestion(qTitle, qBody, tags, uid) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qTitle:qTitle,
          qBody:qBody,
          tags:tags,
          uid:uid
    
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
return this.http.post(`http://localhost:3000/answers`, postData,httpOptions)
}

getAnswers(id) {
  return this.http.get(`http://localhost:3000/answers?qid=${id}`)
}

postComment(qid, answerID,comment) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qid:qid,
          answerID:answerID,
          comment:comment
    
};
return this.http.post(`http://localhost:3000/comments`, postData,httpOptions)
}

// getComments(qi) {
//   return this.http.get(`http://localhost:3000/answers?qid=${id}`)
// }

}
