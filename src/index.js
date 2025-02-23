// function knightMoves([originalRow, originalCol], [targetRow, targetCol]) {
//   let originalCell = [originalRow, originalCol];
//   let targetCell = [targetRow, targetCol];
//   //Invalid position Checks
//   if (originalRow < 0 || originalRow > 7) {
//     console.log("Invalid position");
//   } else if (originalCol < 0 || originalCol > 7) {
//     console.log("Invalid position");
//   } else if (targetRow < 0 || targetRow > 7) {
//     console.log("Invalid position");
//   } else if (targetCol < 0 || targetCol > 7) {
//     console.log("Invalid position");
//   } else {
//     let movesCount = 0;
//     let finalMoves = [];
//     finalMoves.push(originalCell);
//     const validMoveOG = getValidMoves(originalCell);
//     console.log(validMoveOG);
//     if (check(validMoveOG,targetCell)) {
//       movesCount++;
//     }

// if (movesCount === 1) {
//     finalMoves.push(targetCell);
//     console.log(
//       `You made it in ${movesCount} move!  Here's your path: [${finalMoves[0]}] [${finalMoves[1]}]`,
//     );
//     //when path is not found in one move : 
// } else {
//   //somehow store paths in each different array
//   let arr = [];
//   validMoveOG.forEach(element => {
//     const validMoveArray = getValidMoves(element);
//     //left here asdad1123`3`
    
//     arr.push(validMoveArray);
//   });
//   console.log(arr);
//   arr.forEach(subArray => {
//     subArray.map(individualArray => {
//       if (check(individualArray, targetCell)) {
//         movesCount++;
//         console.log('done')
//       }
//     })
//   });
// }
//     // console.log(validMoveOG[index]);
      
//   }
// }

// function getPath(ogCell, targetCell) {
//   let tracker = []
//   // if (tracker.includes(ogCell)) {
//   //   tracker = tracker.filter(element=>element!=ogCell)
//   // }
//   // // let tracker = []
//   tracker.push(ogCell);
//   let ogMoves = getValidMoves(ogCell);
//   // if (ogMoves.includes(ogCell)) {
//   //   ogMoves = ogMoves.filter(value=>value!=ogCell)
//   // }
//   if (check(ogMoves, targetCell)) {
//     return targetCell;
//   }
//   else {
//     ogMoves.forEach(array => {
//     tracker.push(array);
//     const moves = getValidMoves(array)
//     if (check(moves, targetCell)) {
//       return targetCell;
//     }
    
//   })
// }
// }

function getThePath([originalRow, originalCol], [targetRow, targetCol], tracker = [], path = []) {
  let originalCell = [originalRow, originalCol];
  let targetCell = [targetRow, targetCol];
  if (originalCell===targetCell) {
    path.push(originalCell)
    path.push(targetCell)
    return path;
  }
  else {
    const ogMoves = getValidMoves(originalCell);
    tracker.push(originalCell);
    ogMoves.filter((array) => {
      array!=tracker[tracker.length-1]
    })
    if (check(ogMoves)) {
      path.push(originalCell)
      path.push(targetCell);
      return path;
    }
    else {
      for (let index = 0; index < ogMoves.length; index++) {
        const element = ogMoves[index];
        return getThePath(element, targetCell, tracker, path);
      }
    }
  }
}
console.log(getThePath([0, 0], [1, 1]));

// console.log(getPath([0, 0], [1, 1]));

function check(array, target) {
  for (let i = 0; i < array.length; i++) {
    const move = array[i];
  if (move[0] === target[0] && move[1] === target[1]) {
    return true;
} 
  }
  return false;
}

function getValidMoves([originalRow, originalCol]) {
  let validMoves = [];
  // let movesCount = 0;
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
      validMoves.push(firstPos);
    }
  }
  if (secondPos[0] >= 0 && secondPos[0] <= 7) {
    if (secondPos[1] >= 0 && secondPos[1] <= 7) {
      validMoves.push(secondPos);
    }
  }
  if (thirdPos[0] >= 0 && thirdPos[0] <= 7) {
    if (thirdPos[1] >= 0 && thirdPos[1] <= 7) {
      validMoves.push(thirdPos);
    }
  }
  if (fourthPos[0] >= 0 && fourthPos[0] <= 7) {
    if (fourthPos[1] >= 0 && fourthPos[1] <= 7) {
      validMoves.push(fourthPos);
    }
  }
  if (fifthPos[0] >= 0 && fifthPos[0] <= 7) {
    if (fifthPos[1] >= 0 && fifthPos[1] <= 7) {
      validMoves.push(fifthPos);
    }
  }
  if (sixthPos[0] >= 0 && sixthPos[0] <= 7) {
    if (sixthPos[1] >= 0 && sixthPos[1] <= 7) {
      validMoves.push(sixthPos);
    }
  }
  if (seventhPos[0] >= 0 && seventhPos[0] <= 7) {
    if (seventhPos[1] >= 0 && seventhPos[1] <= 7) {
      validMoves.push(seventhPos);
    }
  }
  if (eighthPos[0] >= 0 && eighthPos[0] <= 7) {
    if (eighthPos[1] >= 0 && eighthPos[1] <= 7) {
      validMoves.push(eighthPos);
    }
  }
  return validMoves;
}

// knightMoves([3, 3], [1, 1]);
