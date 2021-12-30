import React, { useState, useContext, SyntheticEvent } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../components';
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  doc,
  setDoc,
} from '../../config/firebase';
import { Form, TextInput, Button } from '../../styles/common.styles';

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
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
        });
        await setDoc(doc(db, 'userData', result.user.uid), {
          habits: [],
        });
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
