import { MutableRefObject, RefObject } from "react";
import styles from "./OptionInput.module.css";

type OptionInputProps = {
  label: string;
  name: string;
  inputRef: RefObject<HTMLInputElement>;
  isNumber?: boolean;
};

export default function OptionInput({
  label,
  name,
  inputRef,
  isNumber,
}: OptionInputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input
        type={isNumber ? "number" : "text"}
        id={label}
        name={name}
        ref={inputRef}
      />
    </div>
  );
}
