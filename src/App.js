import Headers from "./components/Header";
import React, { useState, useEffect } from "react";
import Ball from "./components/ball/ball";

function App() {
  const [comNumber, setComNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userNum, setUserNum] = useState([]);
  useEffect(() => {
    const playNumber = 4;

    let set = new Set();

    while (set.size < playNumber) set.add(Math.floor(Math.random() * 9));
    const newRandArr = Array.from(set); //중복없는 배열
    setComNumber(newRandArr);
    console.log(newRandArr);
  }, []);

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const onSubmit = (inputValue) => {
    if (inputValue.length !== 4) {
      alert('숫자 4개를 입력해주세요T^T')
      setInputValue("");
    }
    else {
      const userNumObj = {
        id: new Date(),
        inputValue,
      };

      setUserNum([userNumObj, ...userNum]);
      setInputValue("");
    }
  };
  return (
    <>
      <Headers />
      <input onChange={onChange} value={inputValue} />
      <button onClick={() => onSubmit(inputValue)}>확인</button>
      {userNum.map((ball, idx) => {
        console.log(ball);
        return (
          <Ball value={ball.inputValue} key={ball.id} comNumber={comNumber} />
        );
      })}
    </>
  );
}

export default App;
