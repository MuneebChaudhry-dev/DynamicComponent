import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closed.emit({ name: this.name });
  }
}
