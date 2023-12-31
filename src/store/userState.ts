import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "USERINFO",
});

export interface UserType {
  username: string;
  role: "USER" | "ADMIN" | "";
}

export const userState = atom<UserType>({
  key: "userState",
  default: {
    username: "",
    role: "",
  },
  effects_UNSTABLE: [persistAtom],
});
