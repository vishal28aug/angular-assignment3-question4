import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent
{
  
  fun(name)
  {

    return [name.length,name.toUpperCase()]
    
  }
}

