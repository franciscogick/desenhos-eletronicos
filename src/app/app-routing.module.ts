import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, Router } from '@angular/router';
import { CapaComponent } from './capa/capa.component';
import { EpigrafeComponent } from './epigrafe/epigrafe.component';
import { Erro404Component } from './erro404/erro404.component';
import { InicioGuard } from './inicio.guard';
import { InicioComponent } from './inicio/inicio.component';
import { ResumoComponent } from './resumo/resumo.component';
import { RizomaComponent } from './rizoma/rizoma.component';
import { AiComponent } from './textos/ai/ai.component';
import { CartografiaLiteraturaDigitalComponent } from './textos/cartografia-literatura-digital/cartografia-literatura-digital.component';
import { DramaturgiaCodigoComponent } from './textos/dramaturgia-codigo/dramaturgia-codigo.component';
import { DramaturgiaTecnologiaComponent } from './textos/dramaturgia-tecnologia/dramaturgia-tecnologia.component';
import { EfemeridadeComponent } from './textos/efemeridade/efemeridade.component';
import { ElitTeatroComponent } from './textos/elit-teatro/elit-teatro.component';
import { EscuroComponent } from './textos/escuro/escuro.component';
import { IntroducaoComponent } from './textos/introducao/introducao.component';
import { IssoQueTeEscreviComponent } from './textos/isso-que-te-escrevi/isso-que-te-escrevi.component';
import { LastSongComponent } from './textos/last-song/last-song.component';
import { LiteraturaDigitalComponent } from './textos/literatura-digital/literatura-digital.component';
import { ReferenciasComponent } from './textos/referencias/referencias.component';
import { TransmissionComponent } from './textos/transmission/transmission.component';
import { UmTextoPorVirComponent } from './textos/um-texto-por-vir/um-texto-por-vir.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollOffset: [0,50]
};

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
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
      component: LiteraturaDigitalComponent},
      { path: 'lexia/efemeridade',
      component: EfemeridadeComponent},
      { path: 'lexia/travessia',
      component: CartografiaLiteraturaDigitalComponent},
      { path: 'lexia/duas-entradas',
      component: ElitTeatroComponent},
        { path: 'lexia/last-song-of-violeta-parra',
        component: LastSongComponent},
        { path: 'lexia/escuro',
        component: EscuroComponent},
        { path: 'lexia/transmission-a-dialogue',
        component: TransmissionComponent},
        { path: 'lexia/ai-when-a-robot-writes-a-play',
        component: AiComponent},
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
