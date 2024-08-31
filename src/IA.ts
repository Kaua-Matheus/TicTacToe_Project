import { combinations } from "./checkWinner";

export type Player = 'X' | 'O';
export type Cell = Player | null;

interface IIA {
    board: Cell[];
    combinations: number[][];
    nextMove(): number | string;
}

export class IA implements IIA {
    board = Array(9).fill(null);
    readonly combinations = combinations;

    public nextMove(): number | string {
        return (
            this.checkWinningMove('O') ||
            this.checkBlockingMove() ||
            this.checkEmptyMiddle() ||
            this.checkBorders() ||
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

    private chooseRandomMove(): string | null {
        const emptyCells = this.board
            .map((cell, index) => cell === null ? index : null)
            .filter(index => index !== null) as number[];

        if (emptyCells.length > 0) {
            const randomIndex = Math.floor(Math.random() * emptyCells.length);
            return String(emptyCells[randomIndex]);
        }
        return null;
    }

    private checkEmptyMiddle(): number | null {
        return this.board[4] === null ? 4 : null;
    }

    private checkBorders(): string  | null {
        const borders = [0, 2, 6, 8];
        const allBordersEmpty = borders.filter(border => this.board[border] === null);

        if(allBordersEmpty.length === 4) {
            const index = Math.floor(Math.random() * allBordersEmpty.length);
            return String(allBordersEmpty[index]);
        }

        for(const border of borders) {
            if (this.board[border] === null) {
                return String(border);
            }
        }
        return null;
    }
}