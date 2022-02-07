import { User } from './models/User';

const user = new User({ name: 'stephen', age: 30 });

user.set({ name: 'enes' });

user.get('name');

user.set({ name: 'luna', age: 21 });

user.get('name');
user.get('age');
