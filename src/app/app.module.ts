import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VisModule } from 'ngx-vis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisNetworkComponent } from './vis-network/vis-network.component';
import { PopupComponent } from './vis-network/popup/popup.component';
import { NotaComponent } from './textos/nota/nota.component';
import { ConceitoComponent } from './textos/conceito/conceito.component';
import { ElitTeatroComponent } from './textos/elit-teatro/elit-teatro.component';
import { CitacaoComponent } from './textos/citacao/citacao.component';
import { CitadorPipe } from './pipes/citador.pipe';
import { ReferenciadorPipe } from './pipes/referenciador.pipe';
import { InicioComponent } from './inicio/inicio.component';
import { RizomaComponent } from './rizoma/rizoma.component';
import { Erro404Component } from './erro404/erro404.component';
import { ReferenciasComponent } from './textos/referencias/referencias.component';
import { CapaComponent } from './capa/capa.component';
import { ResumoComponent } from './resumo/resumo.component';
import { EpigrafeComponent } from './epigrafe/epigrafe.component';
import { IntroducaoComponent } from './textos/introducao/introducao.component';
import { LiteraturaDigitalComponent } from './textos/literatura-digital/literatura-digital.component';
import { CartografiaLiteraturaDigitalComponent } from './textos/cartografia-literatura-digital/cartografia-literatura-digital.component';
import { LastSongComponent } from './textos/last-song/last-song.component';
import { TransmissionComponent } from './textos/transmission/transmission.component';
import { AiComponent } from './textos/ai/ai.component';
import { FiguraComponent } from './textos/figura/figura.component';
import { EscuroComponent } from './textos/escuro/escuro.component';
import { DuvidasComponent } from './textos/duvidas/duvidas.component';
import { RouterModule } from '@angular/router';
import { DramaturgiaTecnologiaComponent } from './textos/dramaturgia-tecnologia/dramaturgia-tecnologia.component';
import { IssoQueTeEscreviComponent } from './textos/isso-que-te-escrevi/isso-que-te-escrevi.component';
import { EfemeridadeComponent } from './textos/efemeridade/efemeridade.component';
import { DramaturgiaCodigoComponent } from './textos/dramaturgia-codigo/dramaturgia-codigo.component';
import { UmTextoPorVirComponent } from './textos/um-texto-por-vir/um-texto-por-vir.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    VisNetworkComponent,
    PopupComponent,
    NotaComponent,
    ConceitoComponent,
    ElitTeatroComponent,
    CitacaoComponent,
    CitadorPipe,
    ReferenciadorPipe,
    InicioComponent,
    RizomaComponent,
    Erro404Component,
    ReferenciasComponent,
    CapaComponent,
    ResumoComponent,
    EpigrafeComponent,
    IntroducaoComponent,
    LiteraturaDigitalComponent,
    CartografiaLiteraturaDigitalComponent,
    LastSongComponent,
    TransmissionComponent,
    AiComponent,
    FiguraComponent,
    EscuroComponent,
    DuvidasComponent,
    DramaturgiaTecnologiaComponent,
    IssoQueTeEscreviComponent,
    EfemeridadeComponent,
    DramaturgiaCodigoComponent,
    UmTextoPorVirComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    VisModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
