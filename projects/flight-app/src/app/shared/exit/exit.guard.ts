import { FlightEditComponent } from './../../flight-booking/flight-edit/flight-edit.component';
import { CanDeactivate } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export interface CanExitComponent {
    canExit(): Observable<boolean>;
}

@Injectable({
    providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<CanExitComponent> {

    canDeactivate(comp: CanExitComponent) {
        return comp.canExit();
    }

}