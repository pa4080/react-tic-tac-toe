const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const squaresMapXY = {
  sq0: [1, 1],
  sq1: [2, 1],
  sq2: [3, 1],
  sq3: [1, 2],
  sq4: [2, 2],
  sq5: [3, 2],
  sq6: [1, 3],
  sq7: [2, 3],
  sq8: [3, 3]
};

function calculateWinner(squares) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        lines: lines[i]
      };
    }
  }

  const tie = squares.every((el) => el != null);
  if (tie)
    return {
      winner: "Draw",
      lines: null
    };

  return {
    winner: null,
    lines: null
  };
}

function calculateNextMove(
  squares = Array(9).fill(null),
  player = "Star",
  computer = "Cog"
) {
  const availableIndex = [];
  const availablePlayers = [];
  const takenIndex = [];
  const takenPlayers = [];

  squares.forEach((element, i) => {
    if (element) {
      takenIndex.push(i);
      takenPlayers.push(element);
    } else {
      availableIndex.push(i);
      availablePlayers.push(element);
    }
  });

  let el;

  // < 3 | < 4 ... id too hard :)
  if (takenPlayers.length < 3) {
    if (availableIndex.includes(4)) {
      el = 4;
    } else if (availableIndex.includes(0)) {
      el = 0;
    } else if (availableIndex.includes(2)) {
      el = 2;
    } else if (availableIndex.includes(6)) {
      el = 6;
    } else if (availableIndex.includes(8)) {
      el = 8;
    } else {
      el = availableIndex[Math.floor(Math.random() * availableIndex.length)];
    }
  } else {
    el = availableIndex[Math.floor(Math.random() * availableIndex.length)];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      let choose = null;

      // This should be a loop
      if (
        !choose &&
        availableIndex.includes(a) &&
        computer === squares[b] &&
        computer === squares[c]
      ) {
        choose = a;
      }

      if (
        !choose &&
        availableIndex.includes(a) &&
        computer === squares[c] &&
        computer === squares[b]
      ) {
        choose = a;
      }

      if (
        !choose &&
        availableIndex.includes(b) &&
        computer === squares[a] &&
        computer === squares[c]
      ) {
        choose = b;
      }

      if (
        !choose &&
        availableIndex.includes(b) &&
        computer === squares[c] &&
        computer === squares[a]
      ) {
        choose = b;
      }

      if (
        !choose &&
        availableIndex.includes(c) &&
        computer === squares[b] &&
        computer === squares[a]
      ) {
        choose = c;
      }

      if (
        !choose &&
        availableIndex.includes(c) &&
        computer === squares[a] &&
        computer === squares[b]
      ) {
        choose = c;
      }

      if (choose) {
        console.log(`Draw a line: ${choose}`);
        el = choose;
        break;
      } else {
        if (
          !choose &&
          availableIndex.includes(a) &&
          player === squares[b] &&
          player === squares[c]
        ) {
          choose = a;
        }

        if (
          !choose &&
          availableIndex.includes(a) &&
          player === squares[c] &&
          player === squares[b]
        ) {
          choose = a;
        }

        if (
          !choose &&
          availableIndex.includes(b) &&
          player === squares[a] &&
          player === squares[c]
        ) {
          choose = b;
        }

        if (
          !choose &&
          availableIndex.includes(b) &&
          player === squares[c] &&
          player === squares[a]
        ) {
          choose = b;
        }

        if (
          !choose &&
          availableIndex.includes(c) &&
          player === squares[b] &&
          player === squares[a]
        ) {
          choose = c;
        }

        if (
          !choose &&
          availableIndex.includes(c) &&
          player === squares[a] &&
          player === squares[b]
        ) {
          choose = c;
        }

        if (choose) {
          console.log(`Block a line: ${choose}`);
          el = choose;
          break;
        }
      }
    }
  }

  if (squaresMapXY[`sq${el}`]) return [el, ...squaresMapXY[`sq${el}`]];
  return [null, null, null];
}

export { calculateWinner, calculateNextMove };
