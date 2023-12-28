import React, { ComponentProps } from "react";
import * as S from "./Selector.style";

interface SelectorProps extends Omit<ComponentProps<"select">, "size"> {
  scale: "big" | "medium" | "small";
  bg?: string;
}

const Selector: React.FC<SelectorProps> = ({ scale, ...rest }) => {
  return <S.Select scale={scale} {...rest} />;
};

export default Selector;
