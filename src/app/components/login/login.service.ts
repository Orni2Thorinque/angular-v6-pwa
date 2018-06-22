import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
    constructor() { }

    public signIn(username: string, password: string): Observable<boolean> {
        return (username && password && username.startsWith('toto') && password.startsWith('toto')) ?
            Observable.of(true).delay(1000) : Observable.of(false).delay(1000);
    }

    public changePassword(username: string, newPassword: string): Observable<boolean> {
        return Observable.of(true).delay(1500);
    }
}
