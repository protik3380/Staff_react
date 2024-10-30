import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SignUpContainer = styled.div`
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

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
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
  justify-content: flex-start;
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

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SignUpContainer>
      <Card>
        <Logo>ECO SCAN LOGO</Logo>
        <BackButton to="/">←</BackButton>
        <Title>SIGN UP</Title>
        <Subtitle>Create Your Account</Subtitle>

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
        </PasswordOptions>

        <Button>SIGN UP</Button>
      </Card>
    </SignUpContainer>
  );
};

export default SignUp;
