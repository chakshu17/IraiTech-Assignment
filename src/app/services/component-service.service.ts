import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComponentServiceService {
  componentArray = [];
  constructor() {}
  getX(index) {
    if (this.componentArray.length <= index) {
      this.componentArray.push({
        key: `X${index}`,
        value: [],
      });
    }
    console.log('X Component');

    console.log(this.componentArray);
  }

  getY(index, data) {
    this.componentArray[index].value.push(data);
    console.log('Y Component');

    console.log(this.componentArray);
  }

  returnArray(){
    return this.componentArray;
  }
}
