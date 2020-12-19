import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  constructor() {}
  @Output() Item = new EventEmitter<string>();

  ngOnInit(): void {}

  submit(event) {
    console.log(event.target.value);
    this.Item.emit(event.target.value);
  }
}
