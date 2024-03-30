export const validateUsername = (username: string) => {
  const regex = /^[0-9A-Za-z]{3,}$/;
  return regex.test(username);
};

export const validatePassword = (password: string) => {
  const regex = /^(?=.*?[0-9])(?=.*?[A-Za-z]).{4,}$/;
  return regex.test(password);
};

export const validateConfirmation = (
  password: string,
  confirmation: string
) => {
  return password.length > 0 && password === confirmation;
};
