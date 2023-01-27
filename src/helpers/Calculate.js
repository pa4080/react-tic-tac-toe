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

function calculateNextMove(squares = Array(9).fill(null), player = "Cog") {
  const available = [];

  squares.forEach((element, i) => {
    if (!element) {
      available.push(i);
    }
  });

  let el;

  if (available.length > 5) {
    if (available.includes(4)) {
      el = 4;
    } else if (available.includes(0)) {
      el = 0;
    } else if (available.includes(2)) {
      el = 2;
    } else if (available.includes(6)) {
      el = 6;
    } else if (available.includes(8)) {
      el = 8;
    } else {
      el = available[Math.floor(Math.random() * available.length)];
    }
  } else {
    el = available[Math.floor(Math.random() * available.length)];
  }

  if (squaresMapXY[`sq${el}`]) return [el, ...squaresMapXY[`sq${el}`]];
  return [null, null, null];
}

export { calculateWinner, calculateNextMove };
