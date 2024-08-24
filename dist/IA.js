"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.next = void 0;
const checkWinner_1 = require("./checkWinner");
const next = (board) => {
    for (const [a, b, c] of checkWinner_1.combinations) {
        if (board[a] && board[a] === board[b] && board[c] === null) {
            return c;
        }
        if (board[a] && board[a] === board[c] && board[b] === null) {
            return b;
        }
        if (board[b] && board[b] === board[c] && board[a] === null) {
            return a;
        }
    }
};
exports.next = next;
//# sourceMappingURL=IA.js.map