import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  imports: [],
  templateUrl: './greeter.component.html',
  styleUrl: './greeter.component.scss',
})
export class GreeterComponent {
  // greeterMessage = input.required<string>();
  greeterMessage = input('Default Message from Greeter');
}
