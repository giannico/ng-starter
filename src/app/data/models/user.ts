export class User {
  id?: string;
  loginId: string;
  firstName: string;
  lastName: string;
  location: string;
  isActive: boolean;

  constructor(data: PartialUser) {
    this.id = data.id;
    this.loginId = data.loginId;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.location = data.location;
    this.isActive = data.isActive;
  }
}

type PartialUser = Partial<User>;
