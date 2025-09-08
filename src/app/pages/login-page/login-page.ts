import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule,FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
  authService = inject(Auth)

  errorLogin = false;

  login(form:any){
    console.log(form)
    this.errorLogin = false;
    if(!form.email || !form.password){
      this.errorLogin = true;
      return
    }
  }
}
