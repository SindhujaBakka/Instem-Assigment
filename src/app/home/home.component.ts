import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public filterAction: any;

  moviesList(e: any) {
    this.filterAction = e.target.value;
  }
}
