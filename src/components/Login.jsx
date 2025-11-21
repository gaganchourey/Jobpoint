import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Controlled input state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any validation you want
    if (email && password) {
      // redirect to Coming Soon page
      navigate("/soon");
    }
  };

  return (
    <div className="h-full flex items-center justify-center bg-gray-100 px-4 ">
      <div className="w-full max-w-md bg-purple-100 shadow-purple-900 shadow-lg rounded-xl md:p-8">

        <h2 className="text-2xl font-bold text-center text-purple-600 mb-2">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <p className="text-center text-gray-500 mb-6">
          {isLogin ? "Welcome back!" : "Create your account"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={!isLogin}
              className="w-full p-3 rounded-md border border-gray-300 scale-95"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 scale-95"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded-md border border-gray-300 scale-95"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-md font-semibold hover:bg-purple-700 transition scale-75"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              setEmail("");
              setPassword("");
              setName("");
            }}
            className="text-purple-600 cursor-pointer font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
