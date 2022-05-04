const GameResult = ({ gameResult }) => {
  console.log("여기까지도달하는지?");
  return (
    <> 
      {gameResult ? (
        <div>당신은 컴퓨터에게서 승리하셨습니다 ! </div> //트루일떄
      ) : (
        <div>당신은 컴퓨터에게서 ㅠ패배ㅠ하셨습니다 ! </div> //펄스일떄
      )}
    </>
  );
};

export default GameResult;
