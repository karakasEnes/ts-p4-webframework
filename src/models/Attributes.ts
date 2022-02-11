import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };
}

// const att = new Attributes<UserProps>({
//   id: 1,
//   name: 'ENESSS',
//   age: 32,
// });

// const name = att.get('name');
