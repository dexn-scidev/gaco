import { Box, IconButton, TextField } from "@mui/material";
import { HTMLProps, useRef, ChangeEvent, RefObject } from "react";
import Add from "./Add";
import Remove from "./Remove";

export type Props = {
  min?: number;
  max?: number;
} & HTMLProps<HTMLInputElement>;

const Input = ({
  inputRef,
  min,
  max,
  onChange,
  ...props
}: Props & { inputRef: RefObject<HTMLInputElement> }) => {
  const validate = (value: string) => {
    const n = Number(value);
    if (isNaN(n)) return false;
    if (min !== undefined && n < min) return false;
    if (max !== undefined && n > max) return false;

    return true;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      if (inputRef.current !== null) inputRef.current.value = "0";
      if (onChange) onChange(e);
    } else if (e.target.value === "0") {
      if (onChange) onChange(e);
    } else if (e.target.value.match(/^\-?\d+\.?\d*$/)) {
      if (!validate(e.target.value)) return;

      if (inputRef.current !== null) {
        inputRef.current.value = e.target.value.replace(/^0+/, "");
      }
      if (onChange) onChange(e);
    }
  };

  return (
    <TextField
      type="text"
      variant="standard"
      fullWidth
      margin="dense"
      inputProps={{
        inputMode: "decimal",
        style: { textAlign: "right" },
        ...props,
      }}
      inputRef={inputRef}
      onChange={handleChange}
    />
  );
};

const CustomNumberInput = (props: Props) => {
  const inputRef = useRef<HTMLInputElement & { _valueTracker: any }>(null);

  const changeValue = (update: (value: number) => number) => {
    if (inputRef.current === null) return;

    const currentValue = Number(inputRef.current.value);
    if (isNaN(currentValue)) return;

    const nextValue = update(currentValue);
    inputRef.current.value = String(nextValue);
    inputRef.current._valueTracker.setValue("");
    inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
  };

  return (
    <Box display="flex" minWidth={160} width={160} height={60}>
      <IconButton onClick={() => changeValue((x) => x - 1)}>
        <Remove fontSize="large" />
      </IconButton>
      <Input inputRef={inputRef} required {...props} />
      <IconButton onClick={() => changeValue((x) => x + 1)}>
        <Add fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default CustomNumberInput;
