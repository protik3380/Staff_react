// src/components/Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  width: 400px;
  padding: 2rem;
  border-radius: 10px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Logo = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #333;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  color: #888;
`;

const InputContainer = styled.div`
  margin: 1rem 0;
  text-align: left;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  border-radius: 20px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 1rem;
  padding-left: 2.5rem; /* For icon spacing */
`;

const Icon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const PasswordOptions = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #555;
  margin-top: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1.5rem;
  border-radius: 20px;
  border: none;
  background-color: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    // Here you can add authentication logic
    // For now, we'll just navigate to the dashboard
    navigate("/dashboard");
  };
  return (
    <LoginContainer>
      <Card>
        <Logo>ECO SCAN LOGO</Logo>
        <Title>LOGIN</Title>
        <Subtitle>Welcome Back!</Subtitle>

        <InputContainer>
          <Label>Email</Label>
          <div style={{ position: "relative" }}>
            <Icon>@</Icon>
            <Input type="email" placeholder="Your Email" />
          </div>
        </InputContainer>

        <InputContainer>
          <Label>Password</Label>
          <div style={{ position: "relative" }}>
            <Icon>🔒</Icon>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
          </div>
        </InputContainer>

        <PasswordOptions>
          <label>
            <input
              type="checkbox"
              onChange={() => setShowPassword(!showPassword)}
            />{" "}
            Show Password
          </label>
          <a href="/" style={{ textDecoration: "none", color: "#888" }}>
            Forgot Password
          </a>
        </PasswordOptions>

        <Button onClick={handleLogin}>LOGIN</Button>

        <Footer>
          Don’t have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            Sign Up
          </Link>
        </Footer>
      </Card>
    </LoginContainer>
  );
};

export default Login;
