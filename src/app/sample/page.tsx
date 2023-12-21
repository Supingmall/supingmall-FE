import { fetchExtended } from "../apis";

const page = async () => {
  const response = await fetchExtended("/profile");
  console.log(response);
  return <div></div>;
};

export default page;
