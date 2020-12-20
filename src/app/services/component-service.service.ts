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
  }

  getY(index, data) {
    this.componentArray[index].value.push(data);
  }

  returnArray() {
    return this.componentArray;
  }
}
