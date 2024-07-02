import instance from ".";

const getAllCategory = async () => {
  const res = await instance.get("category");
  return res.data;
};

export { getAllCategory };
