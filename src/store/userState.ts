import { AtomEffect, atom, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

// next.js에서 사용하기 위해 ssr이 끝났는지를 확인하는 state이다.
// 새로고침 시에 항상 default값인 false를 갖는다.
const ssrCompletedState = atom({
  key: "SsrCompleted",
  default: false,
});

//useEffect에 쓰일 함수를 정의한다.
export const useSsrComplectedState = () => {
  const setSsrCompleted = useSetRecoilState(ssrCompletedState);
  return () => setSsrCompleted(true);
};

const { persistAtom } = recoilPersist({
  key: "USERINFO",
});

//ssrCompletedState가 완료될 때까지 기다린 후, persistAtom을 반환한다.
export const persistAtomEffect = <T>(param: Parameters<AtomEffect<T>>[0]) => {
  param.getPromise(ssrCompletedState).then(() => persistAtom(param));
};

export interface UserType {
  username: string;
  role: "USER" | "ADMIN" | "";
}

export const userState = atom<UserType>({
  key: "USERINFO",
  default: {
    username: "",
    role: "",
  },
  effects_UNSTABLE: [persistAtomEffect],
});