import { AddProductOption } from "../AddProduct/AddProductForm";

type OptionItemProps = {
  option: AddProductOption;
  index: number;
  deleteOption: (index: number) => void;
};

export default function OptionItem({
  index,
  option,
  deleteOption,
}: OptionItemProps) {
  const combinedOption = `${option.color}/${option.product_size}/${option.stock}개`;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    deleteOption(index);
  };

  return <li onClick={handleClick}>{combinedOption}</li>;
}
