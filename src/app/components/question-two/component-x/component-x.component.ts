import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-x',
  templateUrl: './component-x.component.html',
  styleUrls: ['./component-x.component.scss']
})
export class ComponentXComponent implements OnInit {
  @Input() counter;
  constructor() { }

  counterOfY=[]
  ngOnInit(): void {
    console.log(this.counter);

  }
  callComponentY(){
    this.counterOfY.push(1)
  }
}
