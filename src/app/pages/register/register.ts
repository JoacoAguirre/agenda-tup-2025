import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RedirectCommand, RouterLink } from '@angular/router';
import { FormUser } from '../../interfaces/user';
import { UsersService } from '../../services/users-service';
import { Spinner } from '../../components/spinner/spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink, Spinner],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class RegisterPage {
  isLoading = false;
  errorRegister = false;
  router = inject(Router);
  userService = inject(UsersService);

  async register(form: FormUser) {
    this.errorRegister = false;
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.password ||
      !form.password2 ||
      form.password !== form.password2
    ) {
      this.errorRegister = true;
      return;
    }

    this.isLoading = true;
    const ok = await this.userService.register({
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    });
    this.isLoading = false;

    if (!ok) {
      this.errorRegister = true;
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
