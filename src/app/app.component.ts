import { Component } from '@angular/core';

@Component({ // decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // public name = "Abhishek";
  // title = 'Hello World';
  // public childData="";

  // message(event : any){
  //   this.childData = event;
  //   console.log(event);
  // }

  public buttonName = "";

  clickedButtonName(button:any){
    this.buttonName = button;
    // console.log(this.buttonName);
  }

}
