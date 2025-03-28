export const validate = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
    password
  );
  console.log(password)

  console.log(isPasswordValid)

  if (!isEmailValid) return "Invalid EmailID";
  if (!isPasswordValid) return "Invalid Password";

  return null;
};
