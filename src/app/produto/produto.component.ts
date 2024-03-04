import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  nome: FormControl = new FormControl('', [Validators.required]);
  preco: FormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]);
  constructor() {}

  ngOnInit() : void{}

  salvar() : void{
    let save = true
    if (this.nome.invalid){
      console.log("nome invalido")
      save = false
    }
    if (this.preco.invalid){
      console.log("Preco Invalido")
      save = false
    }
    if(save){
    console.log('Salvando Informações')
    console.log('Nome: ' + this.nome.value)
    console.log('Preco: ' + this.preco.value)
    }   
  }


}
