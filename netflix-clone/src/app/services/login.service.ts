import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private toast: ToastrService) { }

  loginUser(email: string, password: string) {
    if(!email || !password) {
      // alert("Please enter a valid email and password");
      this.toast.error("Please enter a valid email and password");
      return;
    }

    else{
      // alert("Login successful!");
      this.toast.success("Login successful!");
      localStorage.setItem("token", Math.floor(Math.random() * 10000) + "")
      this.router.navigateByUrl('/browse');
    }
  }

  isLoggedIn(): boolean {
    if(localStorage.getItem("token")) {
      return true;
    }
    else {
      return false;
    }
  }
}
