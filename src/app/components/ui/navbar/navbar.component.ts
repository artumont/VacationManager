import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass, NgIf],
    templateUrl: './navbar.component.html',
})
export class NavbarComponent {
    isMenuOpen = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
