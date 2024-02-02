import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router){}
  email: string = '';
  password: string = '';

  onSubmit(): void{
    this.loginService.loginUser(this.email, this.password);
  }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn()) {
      this.router.navigateByUrl('/browse');
    }
  }
}
