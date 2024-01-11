import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, MatIconModule],
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
