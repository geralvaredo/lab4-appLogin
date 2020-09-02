import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   private _user:User;

  constructor() { }

  ngOnInit(): void {
  }

   onlogin(user: string,password: string){
    this._user.verifyUser(user,password);
   }

}
