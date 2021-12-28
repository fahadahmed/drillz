import React, { useState, useContext, SyntheticEvent } from 'react';
import styled from '@emotion/styled';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../components';
import { auth, createUserWithEmailAndPassword } from '../../config/firebase';

const Form = styled.form`
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
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AppContext);

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    // const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div>
      <h1>
        Drillz App <small>Register</small>
      </h1>
      <Form onSubmit={handleSubmit}>
        <TextInput type="text" name="name" placeholder="Enter your name" />
        <TextInput type="text" name="email" placeholder="Enter your email" />
        <TextInput type="password" name="password" placeholder="Enter a password" />
        <Button type="submit">Create User</Button>
        {error && <div>{error}</div>}
      </Form>
    </div>
  );
}

export default Register;
