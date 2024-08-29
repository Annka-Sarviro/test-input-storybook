import { useEffect, useState } from "react";
import "normalize.css";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { CiSearch } from "react-icons/ci";
import { PiQuestionBold } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";

function App() {
  const [value, setValue] = useState("Input");
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // useEffect(() => {
  //   if (error) {
  //     setDisabled(error);
  //   }
  // }, [error]);

  return (
    <div className="container">
      {/* <Input
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
      /> */}

      <Input
        value={value}
        name="default"
        placeholder="Input..."
        className="input"
        type="text"
        error={error}
        setValue={setValue}
        disabled={disabled}
        label=""
        // renderInputBeforeIcon={CiSearch}
        // renderInputAfterIcon={PiQuestionBold}
        // renderInfoIcon={SlInfo}
        // shortKey="K"
        // helperText="helper text"
        alignment="right"
        // labelPosition="left"
        sizes="xl"
        // required
        quiet
      />

      <Input
        value={value}
        name="input"
        placeholder="Input..."
        className="input"
        type="email"
        error={error}
        setValue={setValue}
        disabled={disabled}
        label="Email"
        // renderInputBeforeIcon={CiSearch}
        // renderInputAfterIcon={PiQuestionBold}
        // renderInfoIcon={SlInfo}
        // shortKey="K"
        // helperText="helper text"
        // errorText="Invalid email"
        alignment="right"
        labelPosition="left"
        sizes="xl"
        // required
        // quiet
      />
    </div>
  );
}

export default App;
