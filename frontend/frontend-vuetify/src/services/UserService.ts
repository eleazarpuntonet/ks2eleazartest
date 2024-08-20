// src/services/userService.ts
import axios from 'axios';
import { UserResponse, User } from '@/interfaces/User';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getUsers(page: number = 1, limit: number = 10) {
    return apiClient.get<UserResponse>(`/users?page=${page}&limit=${limit}`);
  },
  createUser(user: Partial<User>) {
    return apiClient.post<User>('/users', user);
  },
  updateUser(id: number, user: Partial<User>) {
    return apiClient.put<User>(`/users/${id}`, user);
  },
  deleteUser(id: number) {
    return apiClient.delete(`/users/${id}`);
  },
  getUser(id: number) {
    return apiClient.get<User>(`/users/${id}`);
  },
};
