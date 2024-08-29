import { useEffect, useState } from "react";
import "normalize.css";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { CiSearch } from "react-icons/ci";
import { PiQuestionBold } from "react-icons/pi";
import { SlInfo } from "react-icons/sl";

function App() {
  return (
    <div className="container">
      <Input
        name="icon"
        placeholder="Input..."
        className="input"
        type="email"
        error={true}
        disabled={false}
        label="Email"
        renderInputBeforeIcon={CiSearch}
        renderInputAfterIcon={PiQuestionBold}
        renderInfoIcon={SlInfo}
        shortKey="K"
        helperText="helper text"
        errorText="Invalid email"
        infoText="Additional text"
        alignment="left"
        labelPosition="top"
        sizes="xl"
        required
        quiet
      />
    </div>
  );
}

export default App;
