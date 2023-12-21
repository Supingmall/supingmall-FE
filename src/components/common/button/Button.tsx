"use client";
import React, { ComponentProps } from "react";
import * as S from "./Button.style";

interface ButtonProps extends ComponentProps<"button"> {
  desc: string;
  size: "big" | "medium" | "small";
  bg?: string;
  color?: string;
  bold?: number;
}
export default function Button({ desc, size, ...rest }: ButtonProps) {
  return (
    <S.Button size={size} {...rest}>
      {desc}
    </S.Button>
  );
}
