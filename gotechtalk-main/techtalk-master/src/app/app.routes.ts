import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Blog } from './components/blog/blog';
import { PlanosPrecos } from './components/planos-precos/planos-precos';
import { Loja } from './components/loja/loja';
import { Eventos } from './components/eventos/eventos';
import { Depoimentos } from './components/depoimentos/depoimentos';
import { QuemSomos } from './components/quem-somos/quem-somos';
import { NossaMissao } from './components/nossa-missao/nossa-missao';
import { Contato } from './components/contato/contato';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'blog', component: Blog },
  { path: 'planos-precos', component: PlanosPrecos },
  { path: 'loja', component: Loja },
  { path: 'eventos', component: Eventos },
  { path: 'depoimentos', component: Depoimentos },
  { path: 'quem-somos', component: QuemSomos },
  { path: 'nossa-missao', component: NossaMissao },
  { path: 'contato', component: Contato },
  { path: '**', redirectTo: '' }
];
