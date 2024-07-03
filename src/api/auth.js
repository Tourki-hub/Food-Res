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
  const { data } = await instance.post("/signin", userInfo);

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

const me = async () => {
  const { data } = await instance.get("/me");
  console.log(data);

  return data;
};

const update = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.put("/profile", formData);

  return data;
};

export { checkToken, storeToken, login, register, logout, me, update };
