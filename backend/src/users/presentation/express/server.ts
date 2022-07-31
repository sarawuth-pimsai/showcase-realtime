import express from "express";
import userMockRepository from "../../infrastructure/repositories/userMockRepository";
import UserService from "../../domain/services/userService";
import UserRepository from "../../infrastructure/repositories/userRepository";

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const service = UserService({ userRepo: UserRepository });
  const result = await service.getUser();
  const mock = UserService({ userRepo: userMockRepository });
  const resultMock = await mock.getUser();
  res.json({ status: "Ok", result, resultMock });
});

app.listen(port, () => {
  console.log(`Application runing at http://localhost:${port}`);
});
