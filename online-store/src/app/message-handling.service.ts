import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageHandlingService {
  messages: any[] = [];

  constructor() { 
    this.init()
  }

  getAllMessages(): any[]{
    return this.messages;
  }

  addMessage(data: {name: string, email: string, message:string}){
    this.messages.push(data);
  }

  deleteMessage(index: number): void{
    this.messages.splice(index, 1);
  }

  init(): void{
    this.addMessage({
      name: "F.A.S",
      email: "fas@gmail.com",
      message: "Hello there! Welcome"
    })
  }
}
