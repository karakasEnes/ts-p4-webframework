import { User } from './models/User';

// class Person {
//   constructor(public firstName: string, public lastName: string) {

//   }

//   get fullName(): string {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const person = new Person("enes", "karakas");
// console.log(person.fullName);

const user = new User({ name: 'new record', age: 0 });

user.on('change', () => {
  console.log('hello');
});

user.on('change', () => {
  console.log('newHey');
});

user.trigger('change');

user.get('name');
