import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  item = [];
  age = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11, 12, 13, 14, 15, 16];
  model = new User('', '', 0);

  constructor() { }
  buttonClick() {
    this.item = this.item.concat(this.model );
    this.model = new User('', '', 0);
    console.log(this.item );
  }
  onSubmit() {
  }
  ngOnInit() {
  }

  get diagnostic() {return JSON.stringify(this.model); }

}
