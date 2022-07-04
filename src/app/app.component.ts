import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';

  sum(num1:number,num2:number){
    return num1+num2
  }
  concatstring(str1:any){
    return 'hello'+str1
  }
}
