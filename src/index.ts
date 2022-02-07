import { User } from './models/User';

const user = new User({ name: 'stephen', age: 30 });

user.on('change', () => {});
user.on('change', () => {});
user.on('dsfsadf', () => {});

console.log(user);
