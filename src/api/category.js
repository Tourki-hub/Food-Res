import instance from ".";

const getAllCategory = async () => {
  const { data } = await instance.get("category");
  return data;
};

export { getAllCategory };
