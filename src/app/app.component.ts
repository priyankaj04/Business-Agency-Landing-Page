import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landing';
  showMenu = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showMenu = window.innerWidth >= 1024; // Adjust the breakpoint as per your desktop view size
  }

  toggleMenu() {
    console.log("sksjdjs");
    this.showMenu = !this.showMenu;
  }
}
