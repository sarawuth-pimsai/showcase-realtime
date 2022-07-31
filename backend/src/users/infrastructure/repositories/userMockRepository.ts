import { IUserRepository } from "users/domain/repositories/userRepository";

const userMockRepository: IUserRepository = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      resolve({ id: 2, firstName: "mock" });
    });
  },
  getUsers: () => {
    return new Promise((resolve, reject) => {});
  },
  createUser: () => {
    return new Promise((resolve, reject) => {});
  },
  updateUser: () => {
    return new Promise((resolve, reject) => {});
  },
  deleteUser: () => {
    return new Promise((resolve, reject) => {});
  },
};

export default userMockRepository;
