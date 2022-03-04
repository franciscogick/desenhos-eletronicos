import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CapaComponent } from './capa/capa.component';
import { EpigrafeComponent } from './epigrafe/epigrafe.component';
import { ResumoComponent } from './resumo/resumo.component';
import { RizomaComponent } from './rizoma/rizoma.component';
import { ReferenciasComponent } from './referencias/referencias.component';

import { IntroducaoComponent } from './textos/introducao/introducao.component';
import { IssoQueTeEscreviComponent } from './textos/isso-que-te-escrevi/isso-que-te-escrevi.component';
import { LastSongOfVioletaParraComponent } from './textos/last-song-of-violeta-parra/last-song-of-violeta-parra.component';
import { TransmissionADialogueComponent } from './textos/transmission-a-dialogue/transmission-a-dialogue.component';
import { UmTextoPorVirComponent } from './textos/um-texto-por-vir/um-texto-por-vir.component';

import { InicioGuard } from './inicio.guard';

import { Erro404Component } from './erro404/erro404.component';
import { DaAmabilidadeDosSensoresDePresencaComponent } from './textos/da-amabilidade-dos-sensores-de-presenca/da-amabilidade-dos-sensores-de-presenca.component';
import { FigurasComponent } from './figuras/figuras.component';

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


const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0,50]
};

const routes: Routes = [
  { path: 'inicio',
    component: InicioComponent},
  { path: 'capa',
  component: CapaComponent},
  { path: 'epigrafe',
  component: EpigrafeComponent},
  { path: 'resumo',
  component: ResumoComponent},
  { path: 'abstract',
  component: AbstractComponent},
  { path: 'lista-de-figuras',
  component: FigurasComponent},
  { path: 'referencias',
  component: ReferenciasComponent},
  {
    path: "rizoma",
    component: RizomaComponent,
    children: [
      { path: 'lexia/prologo',
      component: PrologoComponent},
      { path: 'lexia/introducao',
      component: IntroducaoComponent},
        { path: 'lexia/isso-que-te-escrevi',
        component: IssoQueTeEscreviComponent},
      { path: 'lexia/a-pedra-de-euripedes',
      component: APedraDeEuripedesComponent},
      { path: 'lexia/novas-grafias',
      component: NovasGrafiasComponent},
      { path: 'lexia/novas-grafias-2',
      component: NovasGrafiasDoisComponent},
      { path: 'lexia/dramaturgias-digitais',
      component: DramaturgiasDigitaisComponent},
        { path: 'lexia/hiperdramas-de-charles-deemer',
        component: HiperdramasDeCharlesDeemerComponent},
        { path: 'lexia/transmission-a-dialogue',
        component: TransmissionADialogueComponent},
        { path: 'lexia/ive-seen-the-future-and-its-a-robot',
        component: IveSeenTheFutureAndItsARobotComponent},
      { path: 'lexia/consideracoes-finais',
      component: ConsideracoesFinaisComponent},
      { path: 'lexia/epilogo',
      component: EpilogoComponent},
      { path: 'lexia/da-amabilidade-dos-sensores-de-presenca',
      component: DaAmabilidadeDosSensoresDePresencaComponent},
    ],
    
    canActivate: [InicioGuard]
  },
  { path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {path: '404', component: Erro404Component},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
