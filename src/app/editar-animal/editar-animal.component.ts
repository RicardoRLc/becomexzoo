import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-editar-animal',
  templateUrl: './editar-animal.component.html',
  styleUrls: ['./editar-animal.component.scss']
})
export class EditarAnimalComponent implements OnInit {

  id: number;
  animal: Animal;

  constructor(private route: ActivatedRoute, private router: Router,
    private animalService: AnimalService) { }

  ngOnInit() {

    this.animal = new Animal();
    
    this.id = this.route.snapshot.params['id'];

    this.animalService.getAnimal(this.id)
      .subscribe(data => {
        console.log(data)
        this.animal = data;
      }, error => console.log(error));
  }

  editarAnimail() {
    this.animalService.editarAnimal(this.id, this.animal)
      .subscribe(data => console.log(data), error => console.error(error));
    this.animal = new Animal();
    this.listaAnimal();

  }

  onSubmit() {
    this.editarAnimail();

  }

  listaAnimal() {
    this.router.navigate(['/animais']);
  }
}
