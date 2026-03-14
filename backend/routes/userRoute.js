import { loginUser, registerUser } from "../controllers/userController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { signupSchema, loginSchema } from "../validator/userValidator.js";

export default function userRoute(app) {
  app.post("/api/v1/login", validate(loginSchema), loginUser);
  app.post("/api/v1/signup", validate(signupSchema), registerUser);
}
