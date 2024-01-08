import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css',
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  allData: any[] = [];

  isSubmitted = false;

  submitForm(): void {
    this.isSubmitted = true;
    const newData = {
      name: this.name,
      email: this.email,
      message: this.message
    };
    this.allData.push(newData);
  }
}