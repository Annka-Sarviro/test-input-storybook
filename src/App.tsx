import { useEffect, useState } from "react";
import "normalize.css";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { CiSearch } from "react-icons/ci";
import { PiQuestionBold } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";

function App() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (error) {
      setDisabled(error);
    }
  }, [error]);

  return (
    <div>
      <Input
        value={value}
        name="email"
        placeholder="input..."
        className="input"
        type="email"
        error={error}
        setValue={setValue}
        disabled={disabled}
        label="Email"
        renderInputBeforeIcon={CiSearch}
        renderInputAfterIcon={PiQuestionBold}
        renderInfoIcon={SlInfo}
        shortKey="K"
        helperText="helper text"
        labelPosition="left"
        sizes="xl"
        required
        // quiet
      />
    </div>
  );
}

export default App;
