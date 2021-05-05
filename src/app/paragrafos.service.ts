import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagrafosService {

/*

 private renderer: Renderer2;

constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
}

*/

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addNumbers(el:any):void {
    const pars = el.nativeElement.querySelectorAll('p:not(.anotacao)');
    
    Array.from(pars).forEach((p,n) => {
      const div = this.renderer.createElement('span');
      this.renderer.addClass(div,'number');
      this.renderer.setProperty(p,'id','paragrafo-'+(n+1));

      const text = this.renderer.createText('#'+(n+1));

      this.renderer.appendChild(div, text);
      this.renderer.appendChild(p, div);
    });
  }
}
