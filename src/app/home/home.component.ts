import { Component, signal } from '@angular/core';
import { GreeterComponent } from '../components/greeter/greeter.component';
import { CounterComponent } from '../components/counter/counter.component';
@Component({
  selector: 'app-home',
  imports: [GreeterComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeMessage = signal('Message from Home Component');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`the user clicked ${event.key}`);
  }
}
