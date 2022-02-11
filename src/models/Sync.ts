import axios, { AxiosResponse } from 'axios';

interface hasId {
  id?: number;
}

//http://localhost:8007/users
export class Sync<T extends hasId> {
  constructor(public rootUrl: string) {}
  async fetch(id: number): Promise<AxiosResponse> {
    const response = await axios.get(`${this.rootUrl}/${id}`);
    // this.set(response.data);
    return response;
  }

  async save(data: T): Promise<AxiosResponse> {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
