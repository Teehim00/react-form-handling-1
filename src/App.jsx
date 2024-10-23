import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("Greeting Message");

  const onClickMsg = () => {
    setDisplayText(inputValue);
  };

  return (
    <div className="App">
      <div className="greeting-container">{displayText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={onClickMsg}>Update text</button>
      </div>
    </div>
  );
}

export default App;
