export class User {
  email: string;
  name: string;

  constructor(email: string, name = 'John Doe') {
    this.email = email;
    this.name = name;
  }
}
