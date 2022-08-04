import { useRef, ChangeEvent, HTMLProps } from "react";

type Props = {
  min?: number;
  max?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  inputProps: HTMLProps<HTMLInputElement>;
};

const CustomNumberInput = ({
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
          if (min !== undefined && nextValue < min) return;

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
        {...inputProps}
        onChange={onChange || ((e) => {})}
      />
      <button
        onClick={() => {
          if (ref.current == null) return;

          const value = Number(ref.current.value);
          if (isNaN(value)) return;

          const nextValue = value + 1;
          if (max !== undefined && nextValue > max) return;

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
  return (
    <div>
      <CustomNumberInput
        min={0}
        max={999}
        inputProps={{
          inputMode: "decimal",
        }}
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
