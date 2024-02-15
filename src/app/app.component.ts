import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TegelModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-seventeen-basic';
}
