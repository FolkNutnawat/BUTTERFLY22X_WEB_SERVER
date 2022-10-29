export class Investor {
  name!: string;
  surname!: string;
  interest!: string;
  email!: string;
  area_of_interest!: string[];
  constructor(props?: Investor) {
    Object.assign(this, props);
  }
}
