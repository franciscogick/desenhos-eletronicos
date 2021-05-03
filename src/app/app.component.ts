import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desenhos Eletrônicos';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }

}
