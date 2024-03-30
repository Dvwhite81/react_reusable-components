import { useState } from 'react';
import Form from './Form';
import {
  validateConfirmation,
  validatePassword,
  validateUsername,
} from '../../helpers';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const fields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      value: username,
      setValue: setUsername,
      validate: () => validateUsername(username),
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: password,
      setValue: setPassword,
      validate: () => validatePassword(password),
    },
    {
      name: 'confirmation',
      label: 'Confirm Password',
      type: 'password',
      value: confirmation,
      setValue: setConfirmation,
      validate: () => validateConfirmation(password, confirmation),
    },
  ];

  return <Form fields={fields} />;
};

export default RegisterForm;
