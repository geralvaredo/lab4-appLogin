import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    _user:User;

  constructor( private router: Router) {
    this._user = new User();
  }

  ngOnInit(): void {

  }
   public onLogin(){
     let user:string;
     let pass:string;
     user = (document.getElementById('user') as HTMLInputElement).value;
     pass = (document.getElementById('pass') as HTMLInputElement).value;
    this.validateUserAndPassword(user,pass);
  }

  private validateUserAndPassword(user,pass){
      if(user == 'admin' && pass == 'admin'){
        this.router.navigate(['bienvenido']);
      }
      else{
        this.router.navigate(['error']);
      }
  }
}
