import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VisModule } from 'ngx-vis';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisNetworkComponent } from './vis-network/vis-network.component';
import { PopupComponent } from './vis-network/popup/popup.component';
import { NotaComponent } from './textos/nota/nota.component';
import { ConceitoComponent } from './textos/conceito/conceito.component';
import { DuasEntradasComponent } from './textos/duas-entradas/duas-entradas.component';
import { CitacaoComponent } from './textos/citacao/citacao.component';
import { CitadorPipe } from './pipes/citador.pipe';
import { ReferenciadorPipe } from './pipes/referenciador.pipe';
import { InicioComponent } from './inicio/inicio.component';
import { RizomaComponent } from './rizoma/rizoma.component';
import { Erro404Component } from './erro404/erro404.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { CapaComponent } from './capa/capa.component';
import { ResumoComponent } from './resumo/resumo.component';
import { EpigrafeComponent } from './epigrafe/epigrafe.component';
import { IntroducaoComponent } from './textos/introducao/introducao.component';
import { DesenhosEletronicosComponent } from './textos/desenhos-eletronicos/desenhos-eletronicos.component';
import { TravessiaComponent } from './textos/novas-grafias/travessia/travessia.component';
import { LastSongOfVioletaParraComponent } from './textos/hiperdramas-de-charles-deemer/last-song-of-violeta-parra/last-song-of-violeta-parra.component';
import { TransmissionADialogueComponent } from './textos/transmission-a-dialogue/transmission-a-dialogue.component';
import { AiWhenARobotWritesAPlayComponent } from './textos/ai-when-a-robot-writes-a-play/ai-when-a-robot-writes-a-play.component';
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
import { LexiasConectadasComponent } from './textos/lexias-conectadas/lexias-conectadas.component';
import { BotaoTopoComponent } from './botao-topo/botao-topo.component';
import { DaAmabilidadeDosSensoresDePresencaComponent } from './textos/da-amabilidade-dos-sensores-de-presenca/da-amabilidade-dos-sensores-de-presenca.component';
import { FigurasComponent } from './figuras/figuras.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SafePipe } from './pipes/safe.pipe';
import { YoutubeComponent } from './youtube/youtube.component';
import { Youtube2Component } from './youtube2/youtube2.component';
import { PrologoComponent } from './textos/prologo/prologo.component';
import { APedraDeEuripedesComponent } from './textos/a-pedra-de-euripedes/a-pedra-de-euripedes.component';
import { NovasGrafiasComponent } from './textos/novas-grafias/novas-grafias.component';
import { NovasGrafiasDoisComponent } from './textos/novas-grafias-dois/novas-grafias-dois.component';
import { DramaturgiasDigitaisComponent } from './textos/dramaturgias-digitais/dramaturgias-digitais.component';
import { AiComponent } from './textos/ai/ai.component';
import { IveSeenTheFutureAndItsARobotComponent } from './textos/ive-seen-the-future-and-its-a-robot/ive-seen-the-future-and-its-a-robot.component';
import { EpilogoComponent } from './textos/epilogo/epilogo.component';
import { HiperdramasDeCharlesDeemerComponent } from './textos/hiperdramas-de-charles-deemer/hiperdramas-de-charles-deemer.component';
import { ConsideracoesFinaisComponent } from './consideracoes-finais/consideracoes-finais.component';
import { AbstractComponent } from './abstract/abstract.component';
import { HiperdramaComponent } from './textos/hiperdramas-de-charles-deemer/hiperdrama/hiperdrama.component';
import { HipertextoComponent } from './textos/hiperdramas-de-charles-deemer/hipertexto/hipertexto.component';
import { CitacaoDiretaComponent } from './textos/citacao-direta/citacao-direta.component';
import { ManifestoDebrayComponent } from './textos/manifesto-debray/manifesto-debray.component';
import { DragDirective } from './directives/drag.directive';
import { AudioComponent } from './textos/audio/audio.component';
import { VideoComponent } from './textos/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    VisNetworkComponent,
    PopupComponent,
    NotaComponent,
    ConceitoComponent,
    DuasEntradasComponent,
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
    DesenhosEletronicosComponent,
    TravessiaComponent,
    LastSongOfVioletaParraComponent,
    TransmissionADialogueComponent,
    AiWhenARobotWritesAPlayComponent,
    FiguraComponent,
    EscuroComponent,
    DuvidasComponent,
    DramaturgiaTecnologiaComponent,
    IssoQueTeEscreviComponent,
    EfemeridadeComponent,
    DramaturgiaCodigoComponent,
    UmTextoPorVirComponent,
    MenuComponent,
    LexiasConectadasComponent,
    BotaoTopoComponent,
    DaAmabilidadeDosSensoresDePresencaComponent,
    FigurasComponent,
    GaleriaComponent,
    SafePipe,
    YoutubeComponent,
    Youtube2Component,
    PrologoComponent,
    APedraDeEuripedesComponent,
    NovasGrafiasComponent,
    NovasGrafiasDoisComponent,
    DramaturgiasDigitaisComponent,
    AiComponent,
    IveSeenTheFutureAndItsARobotComponent,
    EpilogoComponent,
    HiperdramasDeCharlesDeemerComponent,
    ConsideracoesFinaisComponent,
    AbstractComponent,
    HiperdramaComponent,
    HipertextoComponent,
    CitacaoDiretaComponent,
    ManifestoDebrayComponent,
    DragDirective,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
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
