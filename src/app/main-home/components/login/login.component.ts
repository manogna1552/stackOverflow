import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  users: any;
  constructor(private router: Router , private loginService:LoginService) { }

  ngOnInit() {
  }
  login():void{
    if(this.email == undefined || this.password == undefined){
      this.errorMessage = 'Please enter Email Id/ password.'
    }else {
      this.loginService.getUserDetails().subscribe((data) =>{
        this.users = data;
      console.log(data,"....data...")
      this.users.forEach((element) => {
        if( (this.email == element.email) && (this.password == element.password) )  {
         
          console.log('element...',element)
          localStorage.setItem('testObject', JSON.stringify(element));
          // this.router.navigate(['/userHome']); //navigating to dashboard
          this.router.navigate(['/afterLogin']);
          //location.reload();

        } else {
          this.errorMessage = 'Email id or Password is incorrect. Please try again.';
          
        }
      })
    }, error => {
      this.handleError(error); // handling error

    })
  }
  }

  public handleError(errorResponse: HttpErrorResponse) {
    // client side or server error
    if (errorResponse.error instanceof ErrorEvent) {
      // console.error("client side error",errorResponse.error.message);
      alert('client side error,please try again');
    } else {
       console.error("Server side error",errorResponse);
      alert('server side error,please try again');
    }
    return throwError('there is problem with service');
  }


}
