// Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import Button from "./Button";
import Input from "./Input";
import PageTitle from "./PageTitle";
import LinkButton from "./Link";
import Footer from "./Footer.tsx";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedPassword = localStorage.getItem(email);
    if (storedPassword && storedPassword === password) {
      localStorage.setItem("userName", email);
      alert("Successfully matched data. Redirecting to home page.");
      navigate("/");
    } else {
      setErrorMessage("Invalid email or password");
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <PageTitle title="Login" subtitle="Ecommerce &gt; Login" />

      <main className="flex flex-col items-center justify-center flex-grow w-full px-4">
        <div className="w-full max-w-md">
          <GoogleLoginButton />

          <div className="flex items-center mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {errorMessage && (
              <div className="text-red-600 text-sm">{errorMessage}</div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </button>
            </div>

            <Button type="submit">Login</Button>
          </form>

          <div className="text-center text-sm text-gray-600 mt-4">
            <span>Don't have an account? </span>
            <LinkButton label="signup" path="/signup" />
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Login;
