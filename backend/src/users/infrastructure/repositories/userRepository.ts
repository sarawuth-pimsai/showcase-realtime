import { IUserRepository } from "users/domain/repositories/userRepository";

const UserRepository: IUserRepository = {
  getUser: () => {
    return new Promise((resolve, reject) => {
      resolve({ id: 1, firstName: "sarawuth" });
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

export default UserRepository;
