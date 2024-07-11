import { Component } from '@angular/core';
import { DynamicHooksComponent } from 'ngx-dynamic-hooks';
import { ExampleComponent } from './components/example/example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicHooksComponent, ExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  content = 'Load a component here: <app-example [message]="context.someString"></app-example>';
  parsers = [ExampleComponent];
  context = {someString: "Greetings from the context object!"};
}