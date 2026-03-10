import { loginUser, registerUser } from "../controllers/userController.js";

export default function authRoute(app) {
  app.post("/api/v1/login", loginUser);
  app.post("/api/v1/signup", registerUser);
}
