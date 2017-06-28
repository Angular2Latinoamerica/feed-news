import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feed News';
  hello = "Hola mundo";
  heroes = [
    { name: "Batman", "favorite": "Black" },
    { name: "Robin", favorite: "Red" },
    { name: "Superman", favorite: "Blue" }
  ]
}
