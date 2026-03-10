import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../Api/Axios";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!signupInfo.name || !signupInfo.email || !signupInfo.password) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await registerUser(signupInfo);
      alert("Signup successfully");

      setSignupInfo({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup} className="flex flex-col items-center">
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter your name..."
            value={signupInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={signupInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your password..."
            value={signupInfo.password}
          />
        </div>
        <button>Signup</button>
        <span>
          Already have an account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;
