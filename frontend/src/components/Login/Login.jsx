import { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../Api/Axios";
import { useGlobalContext } from "../../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const { login } = useGlobalContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginInfo.email || !loginInfo.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      const res = await loginUser(loginInfo);
      const { token, user } = res.data; // Destructure user object

      login(token, user); // Pass user object to login
      // Clear the form
      setLoginInfo({
        email: "",
        password: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={loginInfo.email}
            placeholder="Enter your email..."
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={loginInfo.password}
            placeholder="Enter your password..."
          />
        </div>
        <button>Login</button>
        <span>
          New user <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
