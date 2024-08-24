export type Player = 'X' | 'O';
export type Cell = Player | null;
export interface IBoard {
    array: Cell[]
}

export class Board implements IBoard {
    array: Cell[];
    private static _instance: Board | null = null;

    private constructor() {
        this.array = Array(9).fill(null);
    }

    public static instance(): Board {
        if (this._instance === null) {
            this._instance = new Board();
        }
        return this._instance;
    }
}