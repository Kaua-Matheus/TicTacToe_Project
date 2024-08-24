import { Board, Player } from "./tabuleiro";

interface IIA {
    board: Board;
    combinations: number[][];
    nextMove(): number;
}

export class IA implements IIA {
    board: Board;
    readonly combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    constructor(board: Board) {
        this.board = board;
    }

    public nextMove(): number {
        return (
            this.checkWinningMove('O') ||
            this.checkBlockingMove() ||
            this.chooseRandomMove() ||
            -1
        );
    }

    private checkWinningMove(player: Player): number | null {
        for (const [a, b, c] of this.combinations) {
            if (this.board.array[a] === player && this.board.array[b] === player && this.board.array[c] === null) {
                return c;
            }
            if (this.board.array[a] === player && this.board.array[c] === player && this.board.array[b] === null) {
                return b;
            }
            if (this.board.array[b] === player && this.board.array[c] === player && this.board.array[a] === null) {
                return a;
            }
        }
        return null;
    }

    private checkBlockingMove(): number | null {
        return this.checkWinningMove('X');
    }

    private chooseRandomMove(): number | null {
        const emptyCells = this.board.array
            .map((cell, index) => cell === null ? index : null)
            .filter(index => index !== null) as number[];

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            return emptyCells[randomIndex];
        }

        return null;
    }
}