import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  @Input() txt: string;

  constructor() { }

  ngOnInit(): void {
  }

}
