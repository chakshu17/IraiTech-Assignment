import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss']
})
export class QuestionThreeComponent implements OnInit {

  constructor() { }
  userForm: FormGroup;
  number: number[] = [];
  ngOnInit(): void {
    this.userForm = new FormGroup({
      phoneNumber: new FormControl(''),
      extraNumbers: new FormArray([]),
    });
  }

  submit() {
    this.number.push(this.userForm.value.extraNumbers);
    this.number.push(this.userForm.value.phoneNumber);
    console.log(this.number);
  }

  addNumber() {
    (<FormArray>this.userForm.get('extraNumbers')).push(new FormControl(''));
  }

  addData(event){
    console.log(event.target.value);

    // (<FormArray>this.userForm.get('extraNumbers'))
  }
  delete(index) {
    (<FormArray>this.userForm.get('extraNumbers')).removeAt(index);
  }

}
