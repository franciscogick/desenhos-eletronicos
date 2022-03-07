import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/http.service';
import { Referencia } from 'src/app/interfaces/referencia';

@Component({
  selector: 'citacao',
  templateUrl: './citacao.component.html',
  styleUrls: ['./citacao.component.css']
})
export class CitacaoComponent implements OnInit {

  @Input() id: string;
  @Input() pg: string = null;
  @Input() formato: string = 'abnt';
  @Input() obs: string = null;
  @Input() abrv: string = null;
  @Input() min: boolean = false;
  @Input() par: boolean = true;
  
  referencia: Referencia;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getReferenciaByName(this.id).pipe(takeUntil(this.destroy$))
    .subscribe(referencia => {
      this.referencia = referencia;
      console.log(referencia)
    });
  }

  ngOnDestroy():void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
