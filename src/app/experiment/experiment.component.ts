import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experiment',
  templateUrl: './experiment.component.html',
  styleUrls: ['./experiment.component.css']
})
export class ExperimentComponent {

  @Input() public headerName : any;

  //========= Property Binding =========
  public classtype = "text-success text-special";
  public hasdanger = true;
  public multipleClass ={
    "text-success": false, 
    "text-danger":true,
    "text-special": true
  }

  //========= Style Binding ============
  public styleBinding2Demo="green";
  public multipleStyles = {
    color:"blue",
    fontStyle: "italic"
  }

  //========= Interpolation ============
  public greetUser="";
  public name="User";
  greeting(){
    return "Hello " + this.name;
  }

  //=========== Event Binding ==========
  onClick(event : any){
    console.log(event);
    this.greetUser = "Welcome " + this.name;
  }

  //=========== Reference Variable =========
  logMessage(value : any){
    console.log(value);
    this.greetUser = "Welcome " + value;
  }

  //========== Two Way Binding ============
  public inputValue = "";

  //========== Structural Directive - ngSwitch ===========
  public color = "red";

  //========== Structural Directive - ngFor ===========
  public array = ["Red","Yellow","Blue"];

}
