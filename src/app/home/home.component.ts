import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by project name" />
        <button class="primary" type="button">Filter project</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
