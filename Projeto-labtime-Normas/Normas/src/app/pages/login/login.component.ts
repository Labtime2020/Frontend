import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './../../core/services/notification/alert.service';
import { AuthenticationService } from './../../core/services/authentication/authentication.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  flogin: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '/home';
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.flogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
    this.authenticationService.logout();
  }



  onsub() {
    console.log(this.flogin.getRawValue());
    this.login();
  }

  private login() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.flogin.invalid) {
      return;
    }
    //console.log(this.flogin);
    this.loading = true;
    const formdata = new FormData();
    formdata.append('usuario', JSON.stringify(this.flogin.value));
    this.authenticationService.login(this.flogin.value).
    subscribe(
      (data: {body: {} }) => {
        const usuario: any = data.body;
        localStorage.setItem('auth', usuario.authentication);
        localStorage.setItem('pid', usuario.id);
        this.router.navigate([this.returnUrl]);

      },
      error => {
        this.alertService.showDanger('Emaill ou senha incorretos, por favor verificar.');
        this.error = error;
      }, () => {
        this.loading = false;
      }
    );
          /*this.authenticationService.login(this.flogin.controls.email.value, this.flogin.controls.pwdd.value)
            .subscribe(
              (data: { body: {} }) => {
                const programmer: any = data.body;
                localStorage.setItem('auth', programmer.authentication);
                localStorage.setItem('pid', programmer.id);
                // localStorage.setItem('adm', programmer.adm);
                this.router.navigate([this.returnUrl]);
              },
              error => {
                this.alertService.showDanger('Emaill ou senha incorretos, por favor verificar.');
                this.error = error;
              }, () => {
                this.loading = false;
              });*/

  }

  goRegister(){
    this.router.navigate(['/register']);
  }

}
