export class Contact {
  name!: string;
  email!: string;
  message!: string;
  constructor(props?: Contact) {
    Object.assign(this, props);
  }
}
