import { useState, useEffect } from "react";
import styles from "./ball.module.css";

const Ball = ({ value, comNumber }) => {
  const valueArr = [...value];
  const [displayType, SetDisplayType] = useState([]);
  const [obj, setObj] = useState({
    strike: 0,
    ball: 0,
    out: 0,
  });

  useEffect(() => {
    const cloneObj = { ...obj };
    console.log("유즈이펙트");

    comNumber.forEach((number, idx) => {
      const valueNum = Number(valueArr[idx]);
      if (number == valueNum) {
        cloneObj.strike++;
        displayType.push("strike");
      } else if (comNumber.includes(valueNum)) {
        cloneObj.ball++;
        displayType.push("ball");
      } else {
        obj.out++;
        displayType.push("out");
      }
      //   valueArr[idx].className = {styles.strike}
    });
    SetDisplayType([...displayType]);
    setObj({ ...cloneObj });
    console.log(cloneObj);
  }, []);
  // console.log(displayType);

  return (
    <div>
      {valueArr.map((ball, idx) => {
        return (
          <span className={`${styles.baseball} ${styles[displayType[idx]]}`}>
            {ball}
          </span>
        );
      })}
      {console.log(obj)}
      <div>{obj.strike} 스트라이크</div>
      <div>{obj.ball} 볼</div>
      <div>{obj.out} 아웃</div>
    </div>
  );
};

export default Ball;
