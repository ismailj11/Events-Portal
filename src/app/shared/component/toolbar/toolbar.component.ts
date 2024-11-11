import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sidenavOpen = false;

  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }

  closeSidenav(): void {
    this.sidenavOpen = false;
  }

  toggleNotifications(): void {
    // Handle notifications toggle logic if needed
  }
}
