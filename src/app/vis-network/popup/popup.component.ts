import { Component, Input, OnInit } from '@angular/core';
import { Detalhe } from 'src/app/interfaces/detalhe';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() detalhe: Detalhe;

  constructor() { }

  ngOnInit(): void {
  }


  

}
