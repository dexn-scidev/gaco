import { HTMLProps, forwardRef, useRef } from "react";

const WrapInput = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <input
        type="text"
        ref={(node) => {
          inputRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        onChange={(e) => {
          if (inputRef.current === null) return;

          console.log(inputRef.current.value);
        }}
        {...props}
      />
    );
  }
);

function App() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <WrapInput ref={inputRef} />
      <button
        onClick={() => {
          if (inputRef.current === null) return;

          console.log(inputRef.current.value);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
