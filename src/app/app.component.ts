import { Component } from '@angular/core';
import { employee } from 'src/model/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'validation';
  opject=new employee;

}
