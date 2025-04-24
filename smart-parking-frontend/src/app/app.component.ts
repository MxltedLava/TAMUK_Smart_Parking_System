import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  // This tag will be used to render the AppComponent in the index.html
  templateUrl: './app.component.html',  // HTML template for AppComponent
  styleUrls: ['./app.component.css']  // Optional CSS for this component
})
export class AppComponent {
  title = 'smart-parking-system';  // Example property, can be used in HTML
}
