import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class RootComponent {

  employeename: Employee[] = [];
  ngOnInit() {
    this.employeename = [{
      name: "Sachin",
      lastName: 'gowda'
    },
    {
      name: "ashish",
      lastName: 'Dhoni'
    },
    {
      name: "deepa",
      lastName: 'raj'
    }]

  }
}

interface Employee {
  name: string;
  lastName: string;
}