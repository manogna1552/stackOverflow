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

postAnswer(qid, answer,userId) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qid:qid,
          answer:answer,
          uid:userId
    
};
return this.http.post(`http://localhost:3000/answers`, postData,httpOptions)
}

getAnswers(id) {
  return this.http.get(`http://localhost:3000/answers?qid=${id}`)
}

postComment(qid, answerID,comment,userId) {
  const httpOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json',
                                    Authorization : 'my-auth-token'
        })
    };
  const postData = {
          qid:qid,
          answerID:answerID,
          comment:comment,
          uid:userId
    
};
return this.http.post(`http://localhost:3000/comments`, postData,httpOptions)
}

getComments(answerID) {
  return this.http.get(`http://localhost:3000/comments?answerID=${answerID}`)
}

}
