import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
//import {UniqueEmailValidatorService} from '../../../../core/services/validations/unique-email-validator.service';

//import{Http} from '@angular/http';
//import { map, filter, switchMap } from 'rxjs/operators';

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
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
    ) {}
  // vamos criar nosso formulário no momento da nossa inicialização do componente
  ngOnInit() {
    // instanciando essa classe, que contem um objeto
    // criar nosso formulario no momento da instanciação do componente
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', Validators.compose([ // sync validator
        Validators.required,
        Validators.email,
        Validators.maxLength(100),
      ]),
     // UniqueEmailValidatorService.createValidator(this.programmerService)
     ],
      pwd: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  get f(){
    return this.formulario.controls;
  }

  onsub() {
    console.log(this.formulario);
    this.register(); 
    
  }

  private register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    }

    /*this.loading = true;
    this.programmerService.register(this.formulario.controls.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.showSuccess('Cadastro realizado com sucesso.');
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.showDanger('Cadastro não realizado, por favor verificar.');
          this.loading = false;
        });*/
  }

  /*goRegister(){
    this.router.navigate(['/programmer/register']);
  }*/
}
