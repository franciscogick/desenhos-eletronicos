import { Component, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-literatura-digital',
  templateUrl: './literatura-digital.component.html',
  styleUrls: ['./literatura-digital.component.css']
})
export class LiteraturaDigitalComponent implements OnInit {

  nodeId='102';

  constructor(private scrollService: ScrollService) {
    //this.scrollService.scroll();
  }

  ngOnInit(): void {
    
  }

}
