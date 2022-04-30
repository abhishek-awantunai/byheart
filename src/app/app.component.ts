import { AppService } from './app.service';
import { Component } from '@angular/core';
import { concatMap, forkJoin, tap } from 'rxjs';

interface AppInterface {
  type: string;
  config: {
    id: string;
    name: string;
  }
}

type AppType = {
  type: string;
  name: string;
  config: {
    name: string;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppService]
})
export class AppComponent {
  customIfCondition: boolean = false;
}
