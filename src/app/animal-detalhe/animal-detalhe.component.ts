import { Animal } from '../animal';
import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { AnimalListaComponent } from '../animal-lista/animal-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detalhe',
  templateUrl: './animal-detalhe.component.html',
  styleUrls: ['./animal-detalhe.component.scss']
})
export class AnimalDetalheComponent implements OnInit {
  id: number;
  animal: Animal;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService ) { }

  ngOnInit() {
    this.animal = new Animal();
    
    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimal(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));

  }
  listaAnimal(){
    this.router.navigate(['animal-lista']);
  }
}
