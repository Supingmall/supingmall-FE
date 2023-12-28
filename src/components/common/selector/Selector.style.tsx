import styled from "@emotion/styled";

interface SizeProps {
  big: { padding: string; borderRadius?: string; fontSize: string };
  medium: { padding: string; borderRadius?: string; fontSize: string };
  small: { padding: string; borderRadius?: string; fontSize: string };
}

const size: SizeProps = {
  big: { padding: "16px", borderRadius: "12px", fontSize: "2rem" },
  medium: { padding: "12px", borderRadius: "10px", fontSize: "1.6rem" },
  small: { padding: "8px", borderRadius: "8px", fontSize: "1.4rem" },
};

interface SelectStyleProps {
  scale: "big" | "medium" | "small";
  bg?: string;
}

export const Select = styled.select<SelectStyleProps>`
  padding: ${(p) => size[p.scale].padding};
  border-radius: ${(p) => size[p.scale].borderRadius};
  background-color: ${(p) => p.bg || "#ddd"};
  font-size: ${(p) => size[p.scale].fontSize};
  border: none;
  outline: none;
`;
