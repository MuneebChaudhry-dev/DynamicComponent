import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit {
  @Input() name: string = '';
  @Output() closed = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  close() {
    this.closed.emit({ name: this.name });
  }
}
