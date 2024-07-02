import instance from ".";

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return true;
  }
  return false;
};
const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const login = async (userInfo) => {
  const { data } = await instance.post("/login", userInfo);

  storeToken(data.token);
  return data;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const { data } = await instance.post("/signup", userInfo);
  storeToken(data);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};

export { checkToken, storeToken, login, register, logout };
