import { Component, Input, OnInit } from '@angular/core';
import { ComponentServiceService } from '../../../services/component-service.service';

@Component({
  selector: 'app-main-borad-question-two',
  templateUrl: './main-borad-question-two.component.html',
  styleUrls: ['./main-borad-question-two.component.scss'],
})
export class MainBoradQuestionTwoComponent implements OnInit {
  constructor(private counterService: ComponentServiceService) {}

  componentName: string;
  counter: number = 0;
  JsonData;
  counterArray = [];
  showJsonData = false;
  ngOnInit(): void {}
  counterOfX() {
    this.counter++;
    this.counterService.getX(this.counter);
    this.counterArray.push('hello');
  }

  showData() {
    this.showJsonData = !this.showJsonData;
    this.JsonData = this.counterService.returnArray();
  }
}
