class Node {
  constructor(parent, position) {
    this.parent = parent;
    this.position = position;
  }
}
function knightMoves([originalRow, originalCol], [targetRow, targetCol]) {
  let originalCell = [originalRow, originalCol];
  let targetCell = [targetRow, targetCol];
  let path = getPathQ(originalCell, targetCell);
  let numberOfMoves = path.length-1;
  console.log(`You made it in ${numberOfMoves} moves!  Here's your path:`)
  path.forEach(move => {
    console.log(move);
  })
}
knightMoves([3, 3], [4, 3]);
knightMoves([0,0],[6,6]);

function indexOf(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index].position;
    if (element[0] === value[0] && element[1] === value[1]) {
      return index;
    }
  }
}

function getPathQ([originalRow, originalCol], [targetRow, targetCol]) {
  let originalCell = [originalRow, originalCol];
  let targetCell = [targetRow, targetCol];
  let root = new Node(null, originalCell);
  let target = new Node(undefined, targetCell);
  let tracker = [];
  let queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let current = queue[0];
    let validMove = getValidMoves(current);
    for (let index = 0; index < tracker.length; index++) {
      const value = tracker[index];
      if (check(validMove, value)) {
        const indextoCut = indexOf(validMove, value);
        if (indextoCut > -1) {
          validMove.splice(indextoCut, 1);
        }
      }
    }
    if (Array.isArray(validMove)) {
      validMove.forEach((move) => {
        move.parent = current;
        queue.push(move);
      });
    }
    let removed = queue.shift();
    tracker.push(removed.position);
    if (
      removed.position[0] === target.position[0] &&
      removed.position[1] === target.position[1]
    ) {
      let path = [];
      while (removed != null) {
        path.unshift(removed.position);
        removed = removed.parent;
      }
      return path;
    }
  }
}

function check(array, target) {
  for (let i = 0; i < array.length; i++) {
    const move = array[i].position;
    if (move[0] === target[0] && move[1] === target[1]) {
      return true;
    }
  }
  return false;
}

function getValidMoves(ParentNode) {
  let originalRow = ParentNode.position[0];
  let originalCol = ParentNode.position[1];

  let validMoves = [];
  let firstPos = [originalRow + 2, originalCol + 1];
  let secondPos = [originalRow + 1, originalCol + 2];
  let thirdPos = [originalRow - 1, originalCol + 2];
  let fourthPos = [originalRow - 2, originalCol + 1];
  let fifthPos = [originalRow - 2, originalCol - 1];
  let sixthPos = [originalRow - 1, originalCol - 2];
  let seventhPos = [originalRow + 1, originalCol - 2];
  let eighthPos = [originalRow + 2, originalCol - 1];

  if (firstPos[0] >= 0 && firstPos[0] <= 7) {
    if (firstPos[1] >= 0 && firstPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, firstPos));
    }
  }
  if (secondPos[0] >= 0 && secondPos[0] <= 7) {
    if (secondPos[1] >= 0 && secondPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, secondPos));
    }
  }
  if (thirdPos[0] >= 0 && thirdPos[0] <= 7) {
    if (thirdPos[1] >= 0 && thirdPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, thirdPos));
    }
  }
  if (fourthPos[0] >= 0 && fourthPos[0] <= 7) {
    if (fourthPos[1] >= 0 && fourthPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, fourthPos));
    }
  }
  if (fifthPos[0] >= 0 && fifthPos[0] <= 7) {
    if (fifthPos[1] >= 0 && fifthPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, fifthPos));
    }
  }
  if (sixthPos[0] >= 0 && sixthPos[0] <= 7) {
    if (sixthPos[1] >= 0 && sixthPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, sixthPos));
    }
  }
  if (seventhPos[0] >= 0 && seventhPos[0] <= 7) {
    if (seventhPos[1] >= 0 && seventhPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, seventhPos));
    }
  }
  if (eighthPos[0] >= 0 && eighthPos[0] <= 7) {
    if (eighthPos[1] >= 0 && eighthPos[1] <= 7) {
      validMoves.push(new Node(ParentNode, eighthPos));
    }
  }

  return validMoves;
}


