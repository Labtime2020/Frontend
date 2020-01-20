import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../app/core/models/user";
//import {Situation} from '../../../core/models/situation';
import { from } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  // Register user
  ///register(user: FormData) {
  //console.log(user)
  //return this.http.post(`${environment.backend}/hey`,user);
  //return this.http.post(`${environment.backend}`, user);
  ///}
  //register(nome: string, sobrenome: string, email: string, password: string){
    //return this.http.post(`${environment.backend}/hey`,{nome, sobrenome, email, password});
  //}
  register(user: any){
    
    return this.http.post(`${environment.backend}/cadastrar`,user);
  }
}
