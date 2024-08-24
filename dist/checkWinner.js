"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkWinner = exports.combinations = void 0;
exports.combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
const checkWinner = (board) => {
    for (const [a, b, c] of exports.combinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
};
exports.checkWinner = checkWinner;
//# sourceMappingURL=checkWinner.js.map