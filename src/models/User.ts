import axios, { AxiosResponse } from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  }

  async fetch(): Promise<void> {
    const response = await axios.get(
      `http://localhost:8007/users/${this.get('id')}`
    );

    this.set(response.data);
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:8007/users/${id}`, this.data);
    } else {
      axios.post(`http://localhost:8007/users`, this.data);
    }
  }
}
