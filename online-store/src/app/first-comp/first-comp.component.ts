import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageDisplayComponent } from '../message-display/message-display.component';
import { MessageHandlingService } from '../message-handling.service';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDisplayComponent],
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css',
  providers: [MessageHandlingService]
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  allData: any[] = [];

  isSubmitted = false;

  constructor(private service: MessageHandlingService){
    this.allData = service.getAllMessages();
    this.isSubmitted = this.allData.length > 0;
  }

  submitForm(): void {
    this.isSubmitted = true;
    const newData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };
    this.service.addMessage(newData);
    this.name = this.email = this.message = ''
  }

  deleteMessage(index: number): void{
    this.service.deleteMessage(index);
    if(this.allData.length === 0){
      this.isSubmitted = false;
    }
  }
}
