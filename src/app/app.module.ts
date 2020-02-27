import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CriarAnimalComponent } from './criar-animal/criar-animal.component';
import { AnimalDetalheComponent } from './animal-detalhe/animal-detalhe.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimalListaComponent } from './animal-lista/animal-lista.component';
import { EditarAnimalComponent } from './editar-animal/editar-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    CriarAnimalComponent,
    AnimalDetalheComponent,
    AnimalListaComponent,
    EditarAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
