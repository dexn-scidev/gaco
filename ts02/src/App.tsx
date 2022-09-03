import { useState, ChangeEvent } from "react";
import { CssBaseline } from "@mui/material";
import CustomNumberInput from "./CustomNumberInput";

function App() {
  const [value, setValue] = useState("0");

  return (
    <>
      <CssBaseline />
      <CustomNumberInput
        min={0}
        max={999}
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </>
  );
}

export default App;
