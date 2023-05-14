import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'siteEcommerce';

  visibility = false;

  show() {
    this.visibility = !this.visibility;
  }
}
