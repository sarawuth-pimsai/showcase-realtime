export interface IUserRepository {
  getUser: () => Promise<{ id: number; firstName: string }>;
  getUsers: <T>() => Promise<T>;
  createUser: <T>() => Promise<T>;
  updateUser: <T>() => Promise<T>;
  deleteUser: <T>() => Promise<T>;
}
