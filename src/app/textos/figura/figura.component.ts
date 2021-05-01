import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'figura',
  templateUrl: './figura.component.html',
  styleUrls: ['./figura.component.css']
})
export class FiguraComponent implements OnInit {

  @Input() src: string;
  @Input() legenda: string;
  @Input() fonte: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
