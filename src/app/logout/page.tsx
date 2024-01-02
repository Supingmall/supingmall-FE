"use client";

import { userState } from "@/store/userState";
import { removeItem } from "@/utils/localStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useResetRecoilState } from "recoil";

export default function LogoutPage() {
  const router = useRouter();
  const resetUser = useResetRecoilState(userState);
  useEffect(() => {
    removeItem("Token");
    resetUser();
    router.push("/");
  }, []);
  return <></>;
}
