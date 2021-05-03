import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CapaComponent } from './capa/capa.component';
import { EpigrafeComponent } from './epigrafe/epigrafe.component';
import { ResumoComponent } from './resumo/resumo.component';
import { RizomaComponent } from './rizoma/rizoma.component';
import { ReferenciasComponent } from './textos/referencias/referencias.component';

import { IntroducaoComponent } from './textos/introducao/introducao.component';
import { IssoQueTeEscreviComponent } from './textos/isso-que-te-escrevi/isso-que-te-escrevi.component';
import { DesenhosEletronicosComponent } from './textos/desenhos-eletronicos/desenhos-eletronicos.component';
import { TravessiaComponent } from './textos/travessia/travessia.component';
import { EfemeridadeComponent } from './textos/efemeridade/efemeridade.component';
import { DuasEntradasComponent } from './textos/duas-entradas/duas-entradas.component';
import { LastSongOfVioletaParraComponent } from './textos/last-song-of-violeta-parra/last-song-of-violeta-parra.component';
import { EscuroComponent } from './textos/escuro/escuro.component';
import { TransmissionADialogueComponent } from './textos/transmission-a-dialogue/transmission-a-dialogue.component';
import { AiWhenARobotWritesAPlayComponent } from './textos/ai-when-a-robot-writes-a-play/ai-when-a-robot-writes-a-play.component';
import { DramaturgiaCodigoComponent } from './textos/dramaturgia-codigo/dramaturgia-codigo.component';
import { DramaturgiaTecnologiaComponent } from './textos/dramaturgia-tecnologia/dramaturgia-tecnologia.component';
import { UmTextoPorVirComponent } from './textos/um-texto-por-vir/um-texto-por-vir.component';

import { InicioGuard } from './inicio.guard';

import { Erro404Component } from './erro404/erro404.component';


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
  { path: 'referencias',
  component: ReferenciasComponent},
  {
    path: "rizoma",
    component: RizomaComponent,
    children: [
      { path: 'lexia/introducao',
      component: IntroducaoComponent},
        { path: 'lexia/isso-que-te-escrevi',
        component: IssoQueTeEscreviComponent},
      { path: 'lexia/desenhos-eletronicos',
      component: DesenhosEletronicosComponent},
      { path: 'lexia/efemeridade',
      component: EfemeridadeComponent},
      { path: 'lexia/travessia',
      component: TravessiaComponent},
      { path: 'lexia/duas-entradas',
      component: DuasEntradasComponent},
        { path: 'lexia/last-song-of-violeta-parra',
        component: LastSongOfVioletaParraComponent},
        { path: 'lexia/escuro',
        component: EscuroComponent},
        { path: 'lexia/transmission-a-dialogue',
        component: TransmissionADialogueComponent},
        { path: 'lexia/ai-when-a-robot-writes-a-play',
        component: AiWhenARobotWritesAPlayComponent},
      { path: 'lexia/dramaturgia-tecnologia',
      component: DramaturgiaTecnologiaComponent},
        { path: 'lexia/dramaturgia-codigo',
        component: DramaturgiaCodigoComponent},
      { path: 'lexia/um-texto-por-vir',
      component: UmTextoPorVirComponent},
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
