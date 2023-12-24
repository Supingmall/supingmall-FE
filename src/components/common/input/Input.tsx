"use client";
import React, { ComponentProps, InputHTMLAttributes } from "react";
import * as S from "./Input.style";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size: "big" | "medium" | "small";
  placeHolder?: string;
  bg?: string;
}
export default function Input({ size, placeHolder, ...rest }: InputProps) {
  return <S.Input _size={size} placeholder={placeHolder} {...rest} />;
}
