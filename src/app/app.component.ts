import { Component } from '@angular/core';
import { ToasterConfig } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notifierConfig: ToasterConfig = new ToasterConfig({
    showCloseButton: false,
    positionClass: 'toast-bottom-right'
  });
}
