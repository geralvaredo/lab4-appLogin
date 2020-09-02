import {InjectFlags} from '@angular/core';

export class User {

  private _name: string;
  private _password: string;

  constructor() {
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  public verifyUser(user:string, pass:string) {
    try {
      this.validateUserandPassword(user,pass);
    }
    catch(e) {
      console.log("Error: " + e);
    }
  }

  private validateUserandPassword(user:string, pass: string) :boolean {
    let flag:boolean = false;
    if(user.length < 1) {
      throw new Error("Usuario inválido");
    }
    if(pass.length < 8) {
      throw new Error("Password inválida");
    }
    else {
      flag = true;
    }
    return flag;
  }



}
