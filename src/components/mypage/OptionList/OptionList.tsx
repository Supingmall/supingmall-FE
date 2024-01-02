import { AddProductOption } from "../AddProduct/AddProductForm";
import OptionItem from "../OptionItem/OptionItem";
import styles from "./OptionList.module.css";

type OptionListProps = {
  optionList: AddProductOption[];
  deleteOption: (index: number) => void;
};

export default function OptionList({
  optionList,
  deleteOption,
}: OptionListProps) {
  return (
    <ul>
      {optionList?.map((v, i) => {
        return (
          <OptionItem
            key={`optionItem_${i}`}
            option={v}
            index={i}
            deleteOption={deleteOption}
          />
        );
      })}
    </ul>
  );
}
