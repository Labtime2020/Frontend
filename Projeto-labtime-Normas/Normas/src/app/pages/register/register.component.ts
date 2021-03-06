import { ToastrService } from 'ngx-toastr';
import { HttpClient } from "@angular/common/http";
import { AlertService } from "./../../core/services/notification/alert.service";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
//import { Observable } from 'rxjs/Observable';
//import { Body } from '@angular/http/src/body';
//import { CodeNode } from 'source-list-map';

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
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService,
    private router: Router,
    private cliente: HttpClient,
    private toastr: ToastrService
  ) {}
  // vamos criar nosso formulário no momento da nossa inicialização do componente
  ngOnInit() {
    // instanciando essa classe, que contem um objeto
    // criar nosso formulario no momento da instanciação do componente
    this.createForm();
    this.cliente
      .get("https://reqres.in/api/users")
      .subscribe((arrow) => console.log(arrow));
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required, Validators.maxLength(50)]],
      sobrenome: ["", [Validators.required, Validators.maxLength(50)]],
      email: [
        "",
        Validators.compose([
          // sync validator
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ])
        // UniqueEmailValidatorService.createValidator(this.programmerService)
      ],
      password: [
        "",
        [Validators.required, Validators.minLength(6), Validators.maxLength(15)]
      ]
    });
  }

  get f() {
    return this.formulario.controls;
  }

  // o formulário vincula o evento de ENVIO do formulário ao manipulador
  //onsub.
  // -As mensagens de validação são exibidas somente depois que o usuário
  //tentar enviar o formulário pela primeira vez
  onsub() {
    if (this.userService == null) {
      console.log("nuloo - userService");
    }
    console.log(this.formulario);
    this.register();
    const formDate = new FormData();
  }

  onReset() {
    this.submitted = false;
    this.formulario.reset();
    this.router.navigate(['/login'])

  }

  private register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formulario.invalid) {
      return;
    }

    this.loading = true;
    const formdata = new FormData();
    formdata.append("file", null);// transformando para o tipo JSON para ficar compativel com o backend
    formdata.append("usuario", JSON.stringify(this.formulario.value));
    //console.log(data)
    //data["msg"
    this.userService.register(formdata).subscribe(
      data => {
        this.alertService.showSuccess(data['msg']);
        //this.router.navigate(['/login']);

      },
      error => {
        this.alertService.showDanger('Cadastro não realizado, por favor verificar.');
        this.loading = false;
      }

    )
    
  }

  goRegister() {
    //this.router.navigate(["/register"]);
  }
}
