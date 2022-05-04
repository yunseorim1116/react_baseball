import Headers from "./components/Header";
import React, { useState, useEffect } from "react";
import Ball from "./components/ball/ball";
import Chance from "./components/chance/chance";
import GameResult from "./components/gameResult/gameResult";
function App() {
  const [comNumber, setComNumber] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [userNum, setUserNum] = useState([]);
  const [chanceCount, setChanceCount] = useState(3);
  const [result, setResult] = useState(false);
  const [winLose, setWinLose] = useState(false); //기본값은 lose?=false?

  useEffect(() => {
    const playNumber = 4;

    let set = new Set();

    while (set.size < playNumber) set.add(Math.floor(Math.random() * 9));
    const newRandArr = Array.from(set); //중복없는 배열
    setComNumber(newRandArr);
    console.log(newRandArr);
  }, []);

  const gameResult = (value) => {
    // {
    //   console.log(chanceCount);
    //   console.log("언제시작되는지");
    // }
    if (value == comNumber.join("")) {
      setWinLose(true);
      setResult(true);
    } else if (chanceCount == 1) {
      //여기서는 한발 늦음
      console.log("여기서 왜 안될까 테스트좀");
      setWinLose(false);
      // setWinLose(true); //이게 0일때 실행이,,안돼,,,ㅅㅂ
      setResult(true); //얘를 트루로 하면 되고 false로 하면 안됨..
      console.log(result);
      console.log("여기는찍히는지ㅜ");
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const onSubmit = (inputValue) => {
    if (inputValue.length !== 4) {
      alert("숫자 4개를 입력해주세요T^T");
      setInputValue("");
    } else {
      setChanceCount((count) => {
        return count - 1;
      });

      const userNumObj = {
        id: new Date(),
        inputValue,
      };

      setUserNum([userNumObj, ...userNum]);
      setInputValue("");
    }

    gameResult(inputValue);
  };

  return (
    <>
      <Headers />
      {winLose ? null : <Chance chanceCount={chanceCount} />}
      {winLose ? null : (
        <>
          {" "}
          <input onChange={onChange} value={inputValue} />{" "}
          <button
            onClick={() => onSubmit(inputValue)}
            // gameResult={() => gameResult(inputValue)}
          >
            확인
          </button>
        </>
      )}

      {result ? <GameResult gameResult={winLose} /> : null}
      {userNum.map((ball) => {
        return (
          <Ball
            value={ball.inputValue}
            key={ball.id}
            comNumber={comNumber}
            chanceCount={chanceCount}
          />
        );
      })}
    </>
  );
}

export default App;
