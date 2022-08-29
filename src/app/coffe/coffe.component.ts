import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coffe',
  templateUrl: './coffe.component.html',
  styleUrls: ['./coffe.component.css'],
})
export class CoffeComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closed.emit({ name: this.name });
  }
}
