import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showMenu = false;
  router: any;

  toggleMenu(){
    this.showMenu = !this.showMenu;
  }

  navigateTo(route: string){
    this.router.navigateTo([route]);
    this.showMenu =false;
  }

  hideMenu(){
    this.showMenu = false;
  }
}
