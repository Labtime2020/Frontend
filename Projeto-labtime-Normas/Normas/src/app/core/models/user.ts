import { Situation } from "./situation";

export class User {

    id?: number;
    nome?: string;
    sobrenome?: string;
    pwd?: string;
    email?: string;
    adm?: boolean;
    avatar?:null;
    situation?: Situation;
  }
  
  