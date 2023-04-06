import { Component } from '@angular/core';
import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private os: OneSignal) {
    this.os.init({
      appId: "6deb2394-cd8c-4cc4-ad81-92f92fe9fa7e",
      notificationClickHandlerMatch: "origin",
      notificationClickHandlerAction: "focus"
    })

  os.addListenerForNotificationOpened(data => {
    console.log("Received " + data);
  })
  }
}
