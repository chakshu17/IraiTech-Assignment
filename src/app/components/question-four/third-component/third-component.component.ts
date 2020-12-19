import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.scss']
})
export class ThirdComponentComponent implements OnInit {
  @Input() data:string;
  constructor() { }

  ngOnInit(): void {
  }

}
