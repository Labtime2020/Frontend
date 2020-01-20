import { Body } from '@angular/http/src/body';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  //Quando você assina, ele retornará imediatamente o último valor emitido imediatamente (ou o valor inicial se nenhum dado ainda tiver sido emitido).
  //Vamos usar o BehaviorSubjectpara armazenar os dados que queremos acessar em todo o aplicativo.
  public currentuserSubject: BehaviorSubject<FormData>;
  public currentuser: Observable<FormData>;

  constructor(private http: HttpClient, private router: Router) {
    console.log(JSON.parse(localStorage.getItem('currentuser')));
    this.currentuserSubject = new BehaviorSubject<FormData>(JSON.parse(localStorage.getItem('currentuser')));
    this.currentuser = this.currentuserSubject.asObservable();
  }
  // mandaria os dados/info para o servidor, depois o servidor validaria e faria a altenticação e me retornaria
  // com um tokem para poder validar a seção depois
  login(user: any){
    console.log(user);
    return this.http.post<any>(`${environment.backend}/login`,user).
    pipe(map(user => {
      if (user){
        localStorage.setItem('currentuser', JSON.stringify(user.Body));  
        this.currentuserSubject.next(user.Body);
      }
      return user;
    }));
  }

  logout(){
    localStorage.removeItem('auth');
    localStorage.removeItem('pid');
    localStorage.removeItem('currentProgrammer');
    this.router.navigate(['/login']);
    this.currentuserSubject.next(null);
  }
}
