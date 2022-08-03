import { useRef } from "react";

function App() {
  const ref = useRef();

  return (
    <div>
      <button
        onClick={() => {
          ref.current.value = "fuga";
          ref.current._valueTracker.setValue("");
          ref.current.dispatchEvent(new Event("change", { bubbles: true }));
        }}
      >
        click
      </button>
      <input
        ref={ref}
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
