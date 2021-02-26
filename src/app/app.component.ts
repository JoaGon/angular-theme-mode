import { Component } from '@angular/core';
import { UiStyleToggleService } from './ui-toogle.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finansy-web';
  dark = false;
  constructor(private uiStyleToggleService: UiStyleToggleService) {}

  toggleTheme() {
    this.dark = !this.dark;
    this.uiStyleToggleService.toggle();
  }
}
