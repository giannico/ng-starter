import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { User } from '../models/user';

@Injectable()
export class UsersDataService {

  private users: Array<User>;
  private maxId: number;

  constructor(
    private http: Http
  ) {}

  initialize(): Promise<User> {
    return this.http
      .get('/api/users.json')
      .map((response: Response) => response.json())
      .toPromise()
      .then((responseData: Array<User>) => {
        this.users = responseData.map((userJson) => new User(userJson));
        this.maxId = this.getMaxUserId(this.users);

        return this.users;
      })
      .catch((error: any) => Observable.throw(error.json));
  }

  getUsers(): Observable<Array<User>> {
    return Observable.of(this.users);
  }

  getUser(id: string): Observable<User> {
    const foundUser = this.users.find((element) => element.id === id);
    return Observable.of(foundUser);
  }

  createUser(user: User): Observable<User> {
    const newUser = {
      ...user,
      ... { id: (++this.maxId).toString() }
    };

    this.users = [...this.users, newUser];

    return Observable.of(newUser);
  }

  deleteUser(user: User): Observable<void> {
    const index = this.users.findIndex((item: User) => item.id === user.id );

    if (index < 0) {
      return Observable.throw('User not found.');
    }

    this.users = [
      ...this.users.slice(0, index),
      ...this.users.slice(index + 1)
    ];

    return Observable.of(null);
  }

  updateUser(user: User): Observable<User> {
    const index = this.findUserIndex(user.id);

    if (index < 0) { return Observable.throw('User not found.'); }

    const existingUser = this.users[index];

    const updatedUser = { ...existingUser, ...user };

    this.users = [
      ...this.users.slice(0, index),
      updatedUser,
      ...this.users.slice(index + 1)
    ];

    return Observable.of(user);
  }

  ////////////////////

  private getMaxUserId(users: Array<User>) {
    return users.reduce((acc: number, val: User) => {
      const userId = parseInt(val.id, 10);
      return userId > acc ? userId : acc;
    }, 0);
  }

  private findUserIndex(userId: string) {
    return this.users.findIndex((item: User) => item.id === userId );
  }
}
