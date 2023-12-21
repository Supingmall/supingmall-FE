import styled from "@emotion/styled";

interface SizeProps {
  big: {
    padding: string;
    fontSize: string;
    borderRadius?: string;
    width: string;
    height: string;
  };
  medium: {
    padding: string;
    fontSize: string;
    borderRadius?: string;
    width: string;
    height: string;
  };
  small: {
    padding: string;
    fontSize: string;
    borderRadius?: string;
    width: string;
    height: string;
  };
}

interface InputStyleProps {
  _size: "big" | "medium" | "small";
  placeHolder?: string;
  bg?: string;
}

const size: SizeProps = {
  big: {
    padding: "16px",
    fontSize: "2rem",
    borderRadius: "12px",
    width: "200px",
    height: "40px",
  },
  medium: {
    padding: "12px",
    fontSize: "1.6rem",
    borderRadius: "10px",
    width: "150px",
    height: "35px",
  },
  small: {
    padding: "8px",
    fontSize: "1.4rem",
    borderRadius: "8px",
    width: "100px",
    height: "30px",
  },
};

export const Input = styled.input<InputStyleProps>`
  border: none;
  outline: none;
  background-color: ${(p) => p.bg || "#ddd"};

  width: ${(p) => size[p._size].width};
  height: ${(p) => size[p._size].height};
  padding: ${(p) => size[p._size].padding};
  border-radius: ${(p) => size[p._size].borderRadius};

  /* padding: 20px; */
`;
