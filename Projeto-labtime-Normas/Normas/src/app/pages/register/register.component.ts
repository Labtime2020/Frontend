import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FormatWidth } from '@angular/common';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  // variavel que vai representar o nosso formulario - em que vamos trabalhar no nosso componente
  //, onde nos vamos adicionar
   // todas as validações os agrupamentos dos dados 
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  // vamos criar nosso formulário no momento da nossa inicialização do componente
  ngOnInit() {
    // instanciando essa classe, que contem um objeto
    // criar nosso formulario no momento da instanciação do componente
    this.formulario = new FormGroup({
      nome: new FormControl('Nome*'),
      sobrenome: new FormControl('Sobrenome*'),
      email: new FormControl('Nome@email.com*'),
      pwd: new FormControl('Senha')
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
