import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  dName: string;
  email: string;
  password: string;

  constructor(private regService:RegisterService,private router: Router) { }

  ngOnInit() {
  }
  onPost(){
    this.regService.postUserDetails(
      this.dName, this.email, this.password).subscribe((data)=>{
       alert("Registration Sucessful !!");
      this.router.navigate(['/home']);
  
    }, error => {
      this.handleError(error); //handling error
  
     }
    );
  
  }
  public handleError(errorResponse: HttpErrorResponse) {
    // client side or server error
if (errorResponse.error instanceof ErrorEvent) {
    // console.error("client side error",errorResponse.error.message);
  alert('client side error,please try again');
} else {
    // console.error("Server side error",errorResponse);
  alert('server side error,please try again');
}
return throwError('there is problem with service');
}

  register():void{
  
      this.regService.getUserDetails().subscribe((data: any[]) => {
    
              if(data.length == 0) {
                this.onPost();
              }
              else {
              
                for(var i = 0; i < data.length; i++) {
                var obj = data[i];
                
                if (obj.email !==  this.email ) {
                  this.onPost();
                    break;
                } 
              else {
                  alert('email already exists');
                    break;
                }
              }
            }
         })
      };
    
  


}
