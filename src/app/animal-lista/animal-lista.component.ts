import { AnimalDetalheComponent } from '../animal-detalhe/animal-detalhe.component';
import { Observable, Subscriber } from "rxjs";
import { AnimalService } from "../animal.service";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-lista',
  templateUrl: './animal-lista.component.html',
  styleUrls: ['./animal-lista.component.scss']
})
export class AnimalListaComponent implements OnInit {
  animais: Observable<Animal[]>;

  constructor(private animalService: AnimalService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.animais = this.animalService.listaAnimal();
    
  }

  deletarAnimal(id: number) {
    this.animalService.deletarAnimal(id)
    .subscribe(
      data => {
        console.log( data);
        this.reloadData();
      },
      error => console.log(error));

  }
  animalDetalhe(id: number){
    this.router.navigate(['detalhe', id]);
  }
}
