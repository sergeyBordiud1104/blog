import { Component, Input } from '@angular/core';

import { User } from '../../shared/models/user/user';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {
  @Input() user: User;

  constructor() { }

}
