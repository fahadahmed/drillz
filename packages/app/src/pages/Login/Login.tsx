import React, { useState, useContext, SyntheticEvent } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { AppContext } from '../../components';
import { auth, signInWithEmailAndPassword } from '../../config/firebase';
import { Form, TextInput, Button } from '../../styles/common.styles';

function Login() {
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AppContext);

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };

    const email = target.email.value;
    const password = target.password.value;

    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err);
      setError(err.message);
    });
  };

  return (
    <div>
      <h1>
        Drillz <small>Login</small>
      </h1>
      <Form onSubmit={handleSubmit}>
        <TextInput type="email" name="email" placeholder="email address" required />
        <TextInput type="password" name="password" placeholder="password" required />
        <Button type="submit">Sign in</Button>
        {error && <div>{error}</div>}
      </Form>
      <Link to="/sign-up">Register new user</Link>
    </div>
  );
}

export default Login;
