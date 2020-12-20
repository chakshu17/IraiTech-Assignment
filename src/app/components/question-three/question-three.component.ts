import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss'],
})
export class QuestionThreeComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.userForm = this.fb.group({
    //   phoneNumbers: this.fb.array([]),
    // });
  }

  phoneNumbers = new FormArray([]);

  ngOnInit(): void {;
  }


  addNumber() {
    this.phoneNumbers.push(new FormControl(''));
  }

  submit() {
    console.log(Object.assign({}, this.phoneNumbers.value));
  }

  delete(index) {
    // (<FormArray>this.userForm.get('phoneNumbers')).removeAt(index);
    this.phoneNumbers.removeAt(index);
  }
}
