import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConceptsService } from 'src/app/concepts.service';
import { Conceito } from 'src/app/interfaces/conceito';

@Component({
  selector: 'conceito',
  templateUrl: './conceito.component.html',
  styleUrls: ['./conceito.component.css']
})
export class ConceitoComponent implements OnInit {

  @Input() name: string;
  
  conceito: Conceito;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private conceitosService: ConceptsService) { }

  ngOnInit(): void {
    this.conceitosService.getConceito(this.name).pipe(takeUntil(this.destroy$))
    .subscribe(conceito => {
      this.conceito = conceito;
    });
  }

  ngOnDestroy():void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
