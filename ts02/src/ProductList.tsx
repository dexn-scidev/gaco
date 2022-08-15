import { ChangeEvent, useEffect, memo } from "react";
import CustomNumberInput from "./CustomNumberInput";

export type Props = {
  name: string;
  value: string;
  setValue: (value: string) => void;
};

const ProductList = memo(({ name, value, setValue }: Props) => {
  return (
    <span
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span>{name}</span>
      <CustomNumberInput
        min={0}
        max={999}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </span>
  );
});

export default ProductList;
