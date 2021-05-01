import { Component, Input, OnInit } from '@angular/core';
import { VisNetworkService } from 'ngx-vis';
import { NodesService } from 'src/app/nodes.service';

@Component({
  selector: 'app-lexias-conectadas',
  templateUrl: './lexias-conectadas.component.html',
  styleUrls: ['./lexias-conectadas.component.css']
})
export class LexiasConectadasComponent implements OnInit {

  @Input() id: string;

  conexoes: any[];
  nodes: any[];

  public visNetwork: string = 'networkId1';

  constructor(private visNetworkService: VisNetworkService, private nodesService: NodesService) { }

  ngOnInit(): void {
    window.setTimeout(()=>{
      this.conexoes = this.visNetworkService.getConnectedNodes(this.visNetwork,this.id);
    
      this.nodes = this.nodesService.nodes.filter(it => this.conexoes.includes(it.id));

    },300)
    
  }

}
