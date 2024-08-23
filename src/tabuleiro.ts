export type Player = 'X' | 'O';
export type Cell = Player | null;
export type Board = Cell[];

export const fillBoard = (): Board => {
    return Array(9).fill(null);
}