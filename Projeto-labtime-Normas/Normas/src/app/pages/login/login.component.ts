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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.flogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      pwdd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
    //this.authenticationService.logout();
  }

  get f(){
    return this.flogin.controls;
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

    this.loading = true;
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
}
