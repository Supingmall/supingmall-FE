import { userInfoProps } from "@/app/login/page";
import { fetchExtended } from "..";

export const signIn = async (payload: userInfoProps) => {
  const response = await fetchExtended("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  return response;
};
