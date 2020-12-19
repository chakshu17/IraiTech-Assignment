import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-component',
  templateUrl: './fifth-component.component.html',
  styleUrls: ['./fifth-component.component.scss']
})
export class FifthComponentComponent implements OnInit {
  @Input() data:string;
  constructor() { }

  ngOnInit(): void {
  }

}
