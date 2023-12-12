import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllow, setNumbersAllow] = useState(false);
  const [charsAllow, setCharsAllow] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbersAllow) str += "0123456789";
    if (charsAllow) str += "!@#$%&{}[]?/~^*+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllow, charsAllow, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllow, charsAllow, passwordGenerator]);
  return (
    <>
      <div className="h-[80vh] m-auto flex w-full">
        <div className="w-full max-w-xl mx-auto shadow-xl rounded-lg  p-10 text-orange-800 bg-slate-400 text-center m-auto">
          <h1 className="text-black text-4xl text-center  m-4 font-serif">
            Password Generator
          </h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 mt-3">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 read-only text-lg font-semibold"
              placeholder="Password"
              ref={passRef}
            />
            <button
              className="text-white bg-blue-700 hover:bg-black focus:ring-4 focus:ring-blue-300 font-bold rounded-lg px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-lg"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex text-black font-bold font-serif text-lg">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="mx-2"
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length({length})</label>
            <input
              type="checkbox"
              className="mx-2"
              onClick={() => setNumbersAllow((prev) => !prev)}
            />
            <label>Numbers</label>
            <input
              type="checkbox"
              className="mx-2"
              onClick={() => setCharsAllow((prev) => !prev)}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
