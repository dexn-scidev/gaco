import { useState, ChangeEvent } from "react";
import CustomNumberInput from "./CustomNumberInput";

function App() {
  const [value, setValue] = useState("0");

  return (
    <CustomNumberInput
      min={0}
      max={999}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  );
}

export default App;
