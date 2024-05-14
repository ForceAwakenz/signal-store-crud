import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainStore } from './store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signal-store-crud';
  store = inject(MainStore);

  setParent() {
    this.store.setParent({ child: { grandChild: 'GRANDCHILD' } });
  }

  setChild() {
    this.store.setChild({ grandChild: 'grandchild' });
  }

  setGrandChild() {
    this.store.setGrandChild('GrAnDcHiLd');
  }
}
