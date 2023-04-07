import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testproy';

  constructor(){
    console.log("hi");
  }

  //arrow functions
  // const getName = (name:string , lastName:sting) => lastName;

}
