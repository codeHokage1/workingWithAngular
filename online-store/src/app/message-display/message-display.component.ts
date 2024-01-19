import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-display',
  standalone: true,
  imports: [],
  templateUrl: './message-display.component.html',
  styleUrl: './message-display.component.css',
})
export class MessageDisplayComponent {
  @Input() data: any = {};
  @Input() i: number = 0;

  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  onDelete(): void {
    this.delete.emit(this.i)
  }
}
