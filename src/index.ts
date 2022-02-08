import { User } from './models/User';

// const user = new User({ id: 1 });
const user = new User({ id: 1 });

user.events.on('change', () => {
  console.log('change#1');
});

user.events.trigger('change');
