import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';
import { HighlightService } from 'src/app/highlight.service';
import { Highlight } from 'src/app/interfaces/highlight';
import { SessionService } from 'src/app/session.service';

declare var rangy: any;

@Component({
  selector: 'app-transmission',
  templateUrl: './transmission.component.html',
  styleUrls: ['./transmission.component.css']
})
export class TransmissionComponent implements OnInit,AfterViewInit,OnDestroy {

  nodeId='10413';

  textName = 'transmission';
  textContainerId = 'texto-inner-transmission';

  highlighter: any;

  noteModal = false;
  noteEl: number = null;

  
  //@ViewChild("noteModalParagraph", {static: false}) noteModalParagraph: ElementRef; 
  //@ViewChild("noteModalButton", {static: false}) noteModalButton: ElementRef;
  @ViewChild("wrapperEl", {static: false}) wrapperEl: ElementRef; 
  @ViewChild("innerEl", {static: false}) innerEl: ElementRef; 
  @ViewChild("menuRemoveHighlight", {static: false}) menuRemoveHighlight: ElementRef; 
  @ViewChild("menuHighlight", {static: false}) menuHighlight: ElementRef; 
  
  highlights: Highlight[];
  serializedHighlights: string = '';

  sessionUser: string;

  destroy$: Subject<boolean> = new Subject<boolean>();
  savedHighlights: any;
  selectedHighlight: any;
  
  constructor(private renderer: Renderer2, private highlightService: HighlightService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => this.sessionUser = user.name);
    //this.rangyStart();
  }

  ngOnDestroy():void {
		this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngAfterViewInit():void {
    /*window.setTimeout(() => {
      this.sessionService.getUser().pipe(first()).subscribe(user => {
        this.sessionUser = user.name;
        this.getHighlights();
      })},200);

    for (let i = 0; i < this.innerEl.nativeElement.children.length; i++) {

      const wrapper = this.renderer.createElement('div');
      const div = this.renderer.createElement('div');
      const button = this.renderer.createElement('button');

      this.renderer.addClass(wrapper,'wrapper-note');
      this.renderer.addClass(div,'add-note');
      this.renderer.appendChild(div,button);
      this.renderer.appendChild(wrapper,div);

      button.addEventListener('mouseover', (e) => {
        this.noteModal = true;
        this.noteEl = i;
      })

      console.log(div)

      this.renderer.appendChild(this.innerEl.nativeElement.children[i],wrapper);

      this.innerEl.nativeElement.children[i].addEventListener('mouseover',(e)=>{
        console.log(i)
      })
    }
    
    document.addEventListener('mouseup',this.listenerDocumentClick);*/
  }

  /*listenerDocumentClick = (e) => {
    if (e.target.getAttribute('id') != 'menu-remove-highlight' && !e.target.classList.contains('highlight')) this.renderer.removeClass(this.menuRemoveHighlight.nativeElement,'show');

    if (e.target.getAttribute('id') != 'menu-highlight') this.renderer.removeClass(this.menuHighlight.nativeElement,'show');
    
    let sel = window.getSelection();

    if (sel.anchorOffset != sel.focusOffset && !e.target.classList.contains('highlight') && !e.target.classList.contains('pop-citacao') && !e.target.classList.contains('pop-conceito') && !e.target.classList.contains('content') && !e.target.classList.contains('label') && !e.target.classList.contains('reference')) {
      
      let t = this.wrapperEl.nativeElement.scrollTop;

      this.renderer.setStyle(this.menuHighlight.nativeElement,'left',e.x +'px');
      this.renderer.setStyle(this.menuHighlight.nativeElement,'top',(e.y + t - 28)+'px');
      this.renderer.addClass(this.menuHighlight.nativeElement,'show');
    }
  }

  rangyStart():void {
    rangy.init();

    this.highlighter = rangy.createHighlighter();

    this.highlighter.addClassApplier(rangy.createClassApplier("highlight", {
      ignoreWhiteSpace: true,
      tagNames: ["span", "a"],
    }));

    this.highlighter.addClassApplier(rangy.createClassApplier("note", {
      ignoreWhiteSpace: true,
      tagNames: ["span"]
    }));
  }

  private clickEvents():void {
    document.querySelectorAll('span.highlight').forEach((n)=>{
      n.addEventListener('click',this.listener);
    })
  } 

  listener = (e) => {
    let n = e.target || e.srcElement; // chrome || ie
    if (n.nodeType == 3) n = n.parentNode; // safari

    console.log(n,n.offsetTop)

    let h = this.highlighter.getHighlightForElement(n);
    this.selectedHighlight = h;
    console.log(e,h,n,this.selectedHighlight);

    let t = this.wrapperEl.nativeElement.scrollTop;

    this.renderer.setStyle(this.menuRemoveHighlight.nativeElement,'left',(e.x) +'px');
    this.renderer.setStyle(this.menuRemoveHighlight.nativeElement,'top',(e.y + t - 28)+'px');
    this.renderer.addClass(this.menuRemoveHighlight.nativeElement,'show');
  } 

  getHighlights():void {
    this.highlightService.getHighlights(this.textName,this.sessionUser).pipe(first())
    .subscribe(highlights => {
      this.highlights = highlights;
      this.applyHighlights();
    });
  }

  insertHighlight(h):void {
    this.highlightService.insert(h);
  }

  removeHighlight():void {
    this.highlighter.removeHighlights([this.selectedHighlight])
    this.highlightService.removeById(this.selectedHighlight.id);
    this.renderer.removeClass(this.menuRemoveHighlight.nativeElement,'show');
  }
  
  applyHighlights():void {
    //convertendo pro deserializador do rangy
    //type:textContent|start$end$id$type$
  
    let convArr = ['type:textContent']; 

    for (let h of this.highlights.filter(it => it.type == 'highlight')) {
      convArr.push(`${h.start}$${h.end}$${h.id}$${h.type}$${h.containerElementId}`);
    }

    this.highlighter.deserialize(convArr.join('|'));

    this.clickEvents();
  }

  highlightSelectedText() {
    // tem alguma coisa já? se tem não faz...
    let h = this.highlighter.highlightSelection("highlight",{exclusive: false});
    
    let highlight:Highlight = {
      id: 0,
      type: '',
      start: 0,
      end: 0,
      text: '',
      containerElementId: '',
      user: ''
    };

    highlight.id = h[0].id;
    highlight.type = 'highlight';
    highlight.start = h[0].characterRange.start;
    highlight.end = h[0].characterRange.end;
    highlight.text = this.textName;
    highlight.containerElementId = this.textContainerId;
    highlight.user = this.sessionUser;

    this.highlightService.insert(highlight);

    console.log(this.highlighter.serialize())

    this.renderer.removeClass(this.menuHighlight.nativeElement,'show');


    this.clickEvents();
  }*/

}
