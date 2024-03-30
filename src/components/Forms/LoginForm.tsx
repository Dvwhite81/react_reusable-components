import { useState } from 'react';
import Form from './Form';
import { validatePassword, validateUsername } from '../../helpers';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
  ];

  return <Form fields={fields} />;
};

export default LoginForm;
