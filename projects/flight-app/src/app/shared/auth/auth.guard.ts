import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService) {
    }

    canActivate() {
        if (this.authService.userName) {
            return true;
        }
        this.router.navigate(['/home', {needsLogin: true}]);
        return false;
    }

}