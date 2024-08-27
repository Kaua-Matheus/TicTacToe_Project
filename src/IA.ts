export type Player = 'X' | 'O';
export type Cell = Player | null;

interface IIA {
    board: Cell[];
    combinations: number[][];
    nextMove(): number;
}

export class IA implements IIA {
    board = Array(9).fill(null);
    readonly combinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

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
            if (this.board[a] === player && this.board[b] === player && this.board[c] === null) {
                return c;
            }
            if (this.board[a] === player && this.board[c] === player && this.board[b] === null) {
                return b;
            }
            if (this.board[b] === player && this.board[c] === player && this.board[a] === null) {
                return a;
            }
        }
        return null;
    }

    private checkBlockingMove(): number | null {
        return this.checkWinningMove('X');
    }

    private chooseRandomMove(): number | null {
        const emptyCells = this.board
            .map((cell, index) => cell === null ? index : null)
            .filter(index => index !== null) as number[];

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            return emptyCells[randomIndex];
        }

        return null;
    }
}