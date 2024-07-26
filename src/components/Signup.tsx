// SignUp.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import Button from "./Button";
import Input from "./Input";
import PageTitle from "./PageTitle";
import LinkButton from "./Link";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must be at least 8 characters long and contain both letters and numbers"
      );
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    const existingUser = localStorage.getItem(email);
    if (existingUser) {
      setErrorMessage("User already exists");
      return;
    }

    localStorage.setItem(email, password);
    setErrorMessage("");
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <PageTitle title="Sign Up" subtitle="Ecommerce &gt; Sign Up" />

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
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            <Input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />

            {errorMessage && (
              <div className="text-red-600 text-sm">{errorMessage}</div>
            )}

            <div className="text-m text-gray-600 font-Inter">
              By creating an account you agree with our Terms of Service,
              Privacy Policy
            </div>

            <Button type="submit">Sign Up</Button>
          </form>

          <div className="text-base text-sm text-gray-600 mt-4">
            <span>Already have an account? </span>
            <LinkButton label="login" path="/login" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
