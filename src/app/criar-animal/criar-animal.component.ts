import { AnimalService } from '../animal.service';
import { Animal } from '../animal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, } from '@angular/forms';


@Component({
  selector: 'app-criar-animal',
  templateUrl: './criar-animal.component.html',
  styleUrls: ['./criar-animal.component.scss']
})
export class CriarAnimalComponent implements OnInit {

  animal: Animal = new Animal();
  submitted = false;
  salvarFormulario: FormGroup;

  salvarformulario = new FormGroup({

    nome: new FormControl(''),
    nome_pai: new FormControl(''),
    nome_mae: new FormControl('')

  })

  constructor(private animalService: AnimalService,
    private router: Router,
    private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.salvarFormulario = this.formBuilder.group({

      nome: ['', Validators.required],
      nome_pai: [''],
      nome_mae: [''],
      especie: [''],
      sexo: ['',Validators.required],
      nascimento: ['', Validators.required]

    })
  }

  salvar() {

    this.animal = new Animal();
    this.animal.nome = '';
    this.animal.nome_pai = '';
    this.animal.nome_mae = '';
    this.animal.especie = '';
    this.animal.sexo = '';
    // this.animal.nascimento.toDateString();  propriedade nao aceitavel
    this.animalService.criarAnimal(this.animal)
      .subscribe(data => console.log(data), error => console.log(error));

    this.chamaLista();

  }

  onSubmit() {
    this.submitted = true;
    this.salvar();

  }

  mostrarjson(): string {
    return JSON.stringify(this.salvar);
  }

  chamaLista() {
    debugger;
    this.router.navigate(['/animal-lista']);
  }
}
