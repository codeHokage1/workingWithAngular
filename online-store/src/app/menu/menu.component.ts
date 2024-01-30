import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  constructor(private activatedRoute: ActivatedRoute) {
    // console.log(activatedRoute)
  }
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params)
  }

  param: any
}
