export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-]).{8,}$/.test(
      password
    );
  const isName = /^[A-Za-z]+(?:[-'\s][A-Za-z]+)*$/.test(name);
  if (!isName) return "Name is not valid";
  if (!isEmailValid) return "Email Id is not";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
