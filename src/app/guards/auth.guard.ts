import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { AuthService } from '../services/auth/auth.service';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private storage: Storage
  ) { }

  async canActivate(): Promise<boolean> {

    await this.storage.create();
    const storedEmail = await this.storage.get('mail');

    const is_signed_in = storedEmail != null;


    if (!is_signed_in) {
      this.router.navigate(['/home']);
    }

    return is_signed_in;
  }
}
