import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../app/core/models/user';
//import {Situation} from '../../../core/models/situation';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // Register Programmer
  register(user: User) {
    return this.http.put(`${environment.backend}/user`, user);
  }
}