import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.scss'],
})
export class MainBoardComponent implements OnInit {
  constructor() {}
  value;
  ngOnInit(): void {}
  onSubmit(event) {
    this.value = event;
  }
}
