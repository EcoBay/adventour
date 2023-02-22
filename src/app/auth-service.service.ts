import { Injectable } from '@angular/core';
import { SHA256, enc } from 'crypto-js';

type User = {
  username: string;
  email: string;
  salt: number;
  hash: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  currentUser!: User | null;
  users: User[];

  constructor() {
    const defaultUserList = JSON.stringify([]);
    const storedUsers = sessionStorage.getItem('users');
    if (storedUsers === null) sessionStorage.setItem('users', defaultUserList);
    this.users = JSON.parse(storedUsers ?? defaultUserList);

    const defaultUser = JSON.stringify(null);
    const storedCurrentUser = sessionStorage.getItem('currentUser');
    this.updateCurrentUser(JSON.parse(storedCurrentUser ?? defaultUser));
  }

  private updateCurrentUser(newUser: User | null) {
    this.currentUser = newUser;
    sessionStorage.setItem('currentUser', JSON.stringify(newUser));
  }

  addUser(username: string, email: string, password: string) {
    const salt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    const hash = SHA256(salt + password).toString(enc.Base64);
    const user = { username, email, salt, hash };
    this.updateCurrentUser(user);

    this.users.push(user);
    sessionStorage.setItem('users', JSON.stringify(this.users));
  }

  logout() {
    this.updateCurrentUser(null);
  }

  login(email: string, password: string) {
    const user = this.users.find(
      (user) =>
        user.email === email &&
        user.hash === SHA256(user.salt + password).toString(enc.Base64)
    );
    this.updateCurrentUser(user ?? null);
    return user !== undefined;
  }

  get isUserLoggedIn(): boolean {
    return this.currentUser !== null;
  }
}
