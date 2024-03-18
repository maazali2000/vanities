import { Component } from '@angular/core';

@Component({
  selector: 'van-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchItems: string = '';

}
