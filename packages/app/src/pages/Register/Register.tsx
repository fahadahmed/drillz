import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  border: 1px solid #000;
  padding: 12px;
  color: #000000;
  font-size: 20px;
  margin: 12px;
`;

const Button = styled.button`
  border: none;
  background: #000;
  padding: 12px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  margin: 12px;
  &:hover {
    background: #fff;
    color: #000;
  }
`;

function Register() {
  return (
    <div>
      <h1>
        Drillz App <small>Register</small>
      </h1>
      <Container>
        <TextInput type="text" placeholder="Enter your name" />
        <TextInput type="text" placeholder="Enter your email" />
        <TextInput type="text" placeholder="Enter a password" />
        <Button>Create User</Button>
      </Container>
    </div>
  );
}

export default Register;
