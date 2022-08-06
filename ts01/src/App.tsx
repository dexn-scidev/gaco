import { useState, useRef, ChangeEvent, HTMLProps } from "react";

type Props = {
  value?: string;
  min?: number;
  max?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps: HTMLProps<HTMLInputElement>;
};

const CustomNumberInput = ({
  value,
  min,
  max,
  onChange,
  inputProps,
  ...props
}: Props) => {
  const ref = useRef<any>(null);

  return (
    <span {...props}>
      <button
        onClick={() => {
          if (ref.current == null) return;

          const value = Number(ref.current.value);
          if (isNaN(value)) return;

          const nextValue = value - 1;
          ref.current.value = String(nextValue);
          ref.current._valueTracker.setValue("");
          ref.current.dispatchEvent(new Event("change", { bubbles: true }));
        }}
      >
        -
      </button>
      <input
        ref={ref}
        type="text"
        value={value}
        {...inputProps}
        onChange={(e) => {
          if (!e.target.value.match(/^\d+\.?\d*$/)) return;

          const nextValue = Number(e.target.value);
          if (
            (min !== undefined && min > nextValue) ||
            (max !== undefined && max < nextValue)
          ) {
            return;
          }

          if (onChange === undefined) return;
          onChange(e);
        }}
      />
      <button
        onClick={() => {
          if (ref.current == null) return;

          const value = Number(ref.current.value);
          if (isNaN(value)) return;

          const nextValue = value + 1;
          ref.current.value = String(nextValue);
          ref.current._valueTracker.setValue("");
          ref.current.dispatchEvent(new Event("change", { bubbles: true }));
        }}
      >
        +
      </button>
    </span>
  );
};

function App() {
  const [value, setValue] = useState("0");

  return (
    <div>
      <CustomNumberInput
        value={value}
        min={0}
        max={999}
        inputProps={{
          inputMode: "decimal",
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
