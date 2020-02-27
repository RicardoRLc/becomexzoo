import { AnimalDetalheComponent } from './animal-detalhe/animal-detalhe.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListaComponent } from './animal-lista/animal-lista.component';
import { EditarAnimalComponent} from './editar-animal/editar-animal.component';

const routes: Routes = [
  
  { path: 'animal-lista', component: AnimalListaComponent },
  { path: 'criar-animal', component: CriarAnimalComponent },
  { path: 'editar-animal', component: EditarAnimalComponent },
  { path: 'animal-detalhe', component: AnimalDetalheComponent },
  { path: '', redirectTo: 'animal', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
