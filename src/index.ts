import { User } from './models/User';

// const user = new User({ id: 1 });
const user = new User({ name: 'new RR', age: 9 });

// user.set({ name: 'newNAME', age: 99 });

user.save();
