import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  displayNavItems = false;

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(page) {
    switch (page) {
      case 'home':
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'about':
        window.scroll({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });
        break;
      default:
        break;
    }
  }

  openCV() {
    window.open('assets/HugoMiranda_CV.pdf', '_blank', 'fullscreen=yes');
    return false;
  }

  toggleNavDisplay() {
    this.displayNavItems = !this.displayNavItems;
  }

}
