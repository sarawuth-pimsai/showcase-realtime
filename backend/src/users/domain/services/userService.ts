import { IUserRepository } from "../repositories/userRepository";

export type ServiceRepos = {
  userRepo: IUserRepository;
};
const UserService = ({ userRepo }: ServiceRepos) => {
  const getUser = async () => {
    // return "user";
    return await userRepo.getUser();
  };
  const getUsers = async () => {
    return await userRepo.getUsers();
  };
  const createUser = async () => {
    return await userRepo.createUser();
  };
  const updateUser = async () => {
    return await userRepo.updateUser();
  };
  const deleteUser = async () => {
    return await userRepo.deleteUser();
  };
  return { getUser, getUsers, createUser, updateUser, deleteUser };
};

export default UserService;
