import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  nome: FormControl = new FormControl('', [Validators.required]);
  idade: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]);
  constructor() {}



  ngOnInit() : void{}

  salvar() : void{

    let save = true
    if (this.nome.invalid){
      console.log("nome invalido")
      save = false
    }
    if (this.idade.invalid){
      console.log("Idade Invalida")
      save = false
    }
    if(save){
    console.log('Salvando Informações')
    console.log('Nome: ' + this.nome.value)
    console.log('Idade: ' + this.idade.value)
    }   

  }
}
