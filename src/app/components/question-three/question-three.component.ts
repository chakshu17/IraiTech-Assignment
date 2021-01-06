import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-three',
  templateUrl: './question-three.component.html',
  styleUrls: ['./question-three.component.scss'],
})
export class QuestionThreeComponent implements OnInit {
  userForm: FormGroup;
  expenseForm:FormGroup;
  constructor(private fb: FormBuilder) {
    // this.userForm = this.fb.group({
    //   phoneNumbers: this.fb.array([]),
    // });
  }

  phoneNumbers = new FormArray([]);


  ngOnInit(): void {
	this.expenseForm = this.fb.group({
		category: ["fast", ],
		transport_id: ["101"],
		asset_id: ["55555"],
		expense_type: ["Port"],
		date: ["11/12/2020", ],
		expense_info: this.fb.array(["addas","dadas"])
	  });
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
