import { JoinForm } from "@/app/join/page";
import { client } from "..";

export const joinUser = async (payload: JoinForm) => {
  const response = await client.post(`/v1/api/auth/sign-up`, payload);
  return response;
};
