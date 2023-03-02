import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  @Input() public parentData : any;
  @Output() public childEvennt = new EventEmitter();

  public inputValue = "";
  public color = "red";
  public array = ["Red","Yellow","Blue"];

  public name = "Abhishek Bhutra";
  public greetUser="";
  public classtype = "text-success text-special";
  public styleBinding2Demo="green";
  public hasdanger = true;
  public multipleClass ={
    "text-success": false, 
    "text-danger":true,
    "text-special": true
  }

  public multipleStyles = {
    color:"blue",
    fontStyle: "italic"
  }

  greeting(){
    return "Hello " + this.name;
  }

  onClick(event : any){
    console.log(event);
    this.greetUser = "Welcome " + this.name;
  }

  logMessage(value : any){
    console.log(value);
    this.greetUser = "Welcome " + value;
  }

  fireEvent(){
    console.log("Child method fire event");
    this.childEvennt.emit("Hello Abhishek");
  }
}
