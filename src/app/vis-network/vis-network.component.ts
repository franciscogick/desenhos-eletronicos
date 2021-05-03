import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VisNetworkService, Data, Options } from 'ngx-vis';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DataSet } from 'vis-data/peer/umd/vis-data';
import { Node, Edge } from 'vis-network/peer/umd/vis-network';
import { HttpService } from '../http.service';
import { Detalhe } from '../interfaces/detalhe';
import { ExtendedNode } from '../interfaces/extended-node';
import { NodesService } from '../nodes.service';


@Component({
  selector: 'app-vis-network',
  templateUrl: './vis-network.component.html',
  styleUrls: ['./vis-network.component.css']
})
export class VisNetworkComponent implements OnInit, OnDestroy {

  public visNetwork: string = 'networkId1';
  public visNetworkData: Data;
  public nodes: DataSet<ExtendedNode>;
  public edges: DataSet<Edge>;
  public visNetworkOptions: Options;

  public detalhe: Detalhe = {show: false, id:null, label:null, name:null, fragment:null, type: null,descricao:null, x:null, y:null}

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild('elDetalhe', { read: ElementRef }) public elDetalhe: ElementRef<any>;

  public constructor(private httpService: HttpService, private visNetworkService: VisNetworkService, private nodesService: NodesService, private router: Router) {
  }

  public networkInitialized(): void {
    this.visNetworkService.on(this.visNetwork, 'click');
    this.visNetworkService.on(this.visNetwork, 'dragStart');

    this.visNetworkService.moveTo(this.visNetwork,{position: {x:0,y:0},scale: 8});


    /*setTimeout(()=>{
      const p = this.visNetworkService.getPositions(this.visNetwork,['101'])['101'];
      console.log(p)
      this.visNetworkService.moveTo(this.visNetwork,{position: p,scale: 8});
    },400)*/

    //click no nó mostra o popup de detalhes, click fora de qualquer nó esconde o popup
    this.visNetworkService.click.subscribe((eventData: any[]) => {
      if (eventData[0] === this.visNetwork && eventData[1].nodes[0] !== this.detalhe.id) {

        if (eventData[1].nodes.length > 0) {

          let delay = 0;

          if (this.detalhe.show) {
            this.detalhe.show = false; //esconde o popup se ele estiver aparecendo
            delay = 250; //delay caso tenha que esconder popup antigo antes de mostrar novo
          }

          setTimeout(()=>{
            this.detalhe.id = eventData[1].nodes[0];
            this.detalhe.descricao = this.nodes.get(this.detalhe.id).descricao;
            this.detalhe.label = this.nodes.get(this.detalhe.id).label;
            this.detalhe.name = this.nodes.get(this.detalhe.id).name;
            this.detalhe.fragment = this.nodes.get(this.detalhe.id).fragment;
            this.detalhe.type = this.nodes.get(this.detalhe.id).type;

            let elWidth = this.elDetalhe.nativeElement.getBoundingClientRect().width;
            let elHeight = this.elDetalhe.nativeElement.getBoundingClientRect().height;
            
            //calcula a posição do popup pra evitar excesso na tela; 
            //TODO: em mobile → posicionar sempre no meio 
            //this.detalhe.x = eventData[1].pointer.DOM.x + elWidth + 100 > window.innerWidth ? eventData[1].pointer.DOM.x - elWidth : eventData[1].pointer.DOM.x;
            //this.detalhe.y = eventData[1].pointer.DOM.y + elHeight + 50 > window.innerHeight ? eventData[1].pointer.DOM.y - elHeight : eventData[1].pointer.DOM.y;
            
            this.detalhe.show = true;
          },delay);
                   

        } else {
          this.detalhe.show = false;
          this.detalhe.id = null;
        }
        
      }
    });

    //caso se mova a superfície, esconde-se o popup 
    this.visNetworkService.dragStart.subscribe((eventData: any[]) => {
      this.detalhe.show = false;
      this.detalhe.id = null;
    });

  }

  public ngOnInit(): void {

    this.httpService.getNodes().pipe(takeUntil(this.destroy$))
    .subscribe(nodes => {
      this.nodes = new DataSet<ExtendedNode>(nodes);
      this.nodesService.nodes = nodes;

      this.httpService.getEdges().pipe(takeUntil(this.destroy$))
      .subscribe(edges => {
        this.edges = new DataSet<Edge>(edges);
        this.visNetworkData = { nodes: this.nodes, edges: this.edges };

        this.visNetworkService.moveTo
      });
    });

    this.visNetworkOptions = {
      physics: {
        stabilization: false,
        barnesHut: {
          gravitationalConstant: -8000,
          springConstant: 0.001,
          springLength: 200
        },      
      },
      nodes: {
          shape: 'dot',
          scaling: {
              min: 10,
              max: 30
          },
          font: {
              size: 16,
              color: '#fff',
              face: 'Source Code Pro'
          }
      },
      edges: {
        color: '#fff'
      }
    };
  }

  public dismissDetalhe():void {
    this.detalhe.show = false;
    this.detalhe.id = null;
  }

  public ngOnDestroy(): void {
    this.visNetworkService.off(this.visNetwork, 'click');
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}