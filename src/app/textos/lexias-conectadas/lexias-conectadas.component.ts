import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { VisNetworkService } from 'ngx-vis';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NodesService } from 'src/app/nodes.service';

@Component({
  selector: 'app-lexias-conectadas',
  templateUrl: './lexias-conectadas.component.html',
  styleUrls: ['./lexias-conectadas.component.css']
})
export class LexiasConectadasComponent implements OnInit,AfterViewInit {

  @Input() id: string;

  conexoes: any[];
  nodes: any[];

  loaded = false;

  public visNetwork: string = 'networkId1';

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private visNetworkService: VisNetworkService, private nodesService: NodesService) { }

  ngOnInit(): void {
    this.conexoes = [];
    this.nodes = [];

    setTimeout(()=>{
      this.nodesService.getNetworkState().pipe(takeUntil(this.destroy$)).subscribe(state => {
        if (state) {
          this.conexoes = this.visNetworkService.getConnectedNodes(this.visNetwork,this.id);
          this.nodes = this.nodesService.nodes.filter(it => this.conexoes.includes(it.id));

          this.loaded = true;
        }
      });
    },300);
  }

  ngAfterViewInit(): void {
    
    
  }

  ngOnDestroy():void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
