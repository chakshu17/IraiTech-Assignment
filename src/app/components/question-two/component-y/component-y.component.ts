import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ComponentServiceService } from 'src/app/services/component-service.service';

@Component({
  selector: 'app-component-y',
  templateUrl: './component-y.component.html',
  styleUrls: ['./component-y.component.scss']
})
export class ComponentYComponent implements OnInit {
  @Input() yCounter;
  constructor(private counterService:ComponentServiceService) { }

  ngOnInit(): void {
  }
  submit(f:NgForm){
    console.log(f.value.text);
    this.counterService.getY(this.yCounter,f.value.text)
  }
}
