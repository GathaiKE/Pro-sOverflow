import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() message!: null | string;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  onClick(msg: string) {
    this.clicked.emit(msg);
  }
  
  onClose() {
    this.message = null;
  }
}
