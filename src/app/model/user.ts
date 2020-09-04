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





}
