import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css'],
})
export class GymComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closed.emit({ name: this.name });
  }
}
