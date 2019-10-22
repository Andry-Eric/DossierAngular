import { User } from "../models/User.model";
import { Subject } from "rxjs";

export class UserService {
  private users: User[] = [
    {
      firstName: "Andry-Eric",
      lastName: "Randrianasolo",
      email: "andryericrandrianasolo@gmail.com",
      drinkPreference: "Coca",
      hobbies: ["coder", "la dégustation de café"]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
