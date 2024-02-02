import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  constructor(private loginservice: LoginService, private router: Router){}

  ngOnInit(): void {
    if(!this.loginservice.isLoggedIn()) {
      this.router.navigateByUrl('/login');
    }
  }
}
