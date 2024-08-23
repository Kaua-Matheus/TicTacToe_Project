import { Board } from "./tabuleiro";
import { combinations } from "./checkWinner";

export const winGame = (board: Board): number => {

    for (const [a, b, c] of combinations) {
        if (board[a] && board[a] === board[b] && board[c] === null) {
            return board.indexOf(board[c])
        }

        if (board[a] && board[a] === board[c] && board[b] === null) {
            return board.indexOf(board[b])
        }

        if (board[b] && board[b] === board[c] && board[a] === null) {
            return board.indexOf(board[a])
        }


    }

    return 0;

}

// export const combinations = [
//     [0, 1, 2], [3, 4, 5], [6, 7, 8],
//     [0, 3, 6], [1, 4, 7], [2, 5, 8],
//     [0, 4, 8], [2, 4, 6]
// ];