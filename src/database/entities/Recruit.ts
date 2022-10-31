export class Recruit {
  name!: string;
  position!: string;
  email!: string;
  phone!: string;
  cv!: string;
  constructor(props?: Recruit) {
    Object.assign(this, props);
  }
}
