import { Component, Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Input() isOpen = false;
  @Output() sidenavClose = new EventEmitter<void>();

  closeSidenav(): void {
    this.sidenavClose.emit(); // Emit the close event to the parent component
  }
}