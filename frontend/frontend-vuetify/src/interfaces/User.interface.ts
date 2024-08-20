export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserResponse {
  data: User[];
  total: number;
  page: number;
  limit: number;
}
