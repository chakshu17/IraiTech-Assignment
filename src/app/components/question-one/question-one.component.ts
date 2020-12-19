import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-question-one',
  templateUrl: './question-one.component.html',
  styleUrls: ['./question-one.component.scss'],
})
export class QuestionOneComponent implements OnInit {
  constructor() {}
  list: number[] = [2, 3, 10, 15, 26, 35, 50, 63];
  numberOfIndex: number;

  ngOnInit(): void {}

  submit(f: NgForm) {
    this.numberOfIndex = this.list[f.value.number];
  }
}
