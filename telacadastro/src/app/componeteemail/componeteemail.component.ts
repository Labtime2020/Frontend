import { Component, OnInit } from "@angular/core";
import { Validators, FormControl } from "@angular/forms";

@Component({
  selector: "emailcomp",
  templateUrl: "./componeteemail.component.html",
  styleUrls: ["./componeteemail.component.css"]
})
export class ComponeteemailComponent implements OnInit {
  email = new FormControl("", [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError("required")
      ? "email válido !!!"
      : this.email.hasError("email")
      ? "email inválido !!!"
      : "";
  }

  ngOnInit() {}
}
