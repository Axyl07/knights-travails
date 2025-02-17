function knightMoves([originalRow, originalCol], [targetRow, targetCol]) {
//    const targetCell = [targetRow, targetCol];
    //Invalid position Checks
    if (originalRow < 0 || originalRow > 7) {
        console.log('Invalid position');
    }
    else if (originalCol < 0 || originalCol > 7) {
        console.log('Invalid position');
    }
    else if (targetRow < 0 || targetRow > 7) {
        console.log('Invalid position');
    }
    else if (targetCol < 0 || targetCol > 7) {
        console.log('Invalid position');
    }
    else {
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
            if (firstPos[1]>=0 && firstPos[1]<=7) {
                validMoves.push(firstPos);           
            }
        }
        if (secondPos[0] >= 0 && secondPos[0] <= 7) {
            if (secondPos[1]>=0 && secondPos[1]<=7) {
                validMoves.push(secondPos);       
            }
        }
        if (thirdPos[0] >= 0 && thirdPos[0] <= 7) {
            if (thirdPos[1]>=0 && thirdPos[1]<=7) {
                validMoves.push(thirdPos);       
            }
        }
        if (fourthPos[0] >= 0 && fourthPos[0] <= 7) {
            if (fourthPos[1]>=0 && fourthPos[1]<=7) {
                validMoves.push(fourthPos);       
            }
        }
        if (fifthPos[0] >= 0 && fifthPos[0] <= 7) {
            if (fifthPos[1]>=0 && fifthPos[1]<=7) {
                validMoves.push(fifthPos);       
            }
        }
        if (sixthPos[0] >= 0 && sixthPos[0] <= 7) {
            if (sixthPos[1]>=0 && sixthPos[1]<=7) {
                validMoves.push(sixthPos);       
            }
        }
        if (seventhPos[0] >= 0 && seventhPos[0] <= 7) {
            if (seventhPos[1]>=0 && seventhPos[1]<=7) {
                validMoves.push(seventhPos);       
            }
        }
        if (eighthPos[0] >= 0 && eighthPos[0] <= 7) {
            if (eighthPos[1]>=0 && eighthPos[1]<=7) {
                validMoves.push(eighthPos);       
            }
        }
        console.log(validMoves);
    }


}
knightMoves([7,7],[1,2]);