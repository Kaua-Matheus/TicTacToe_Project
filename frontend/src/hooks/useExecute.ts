import { useState } from "react";
import checkWinner from "../../../src/checkWinner";
import { IA } from "../../../src/IA";

export default function useExecute() {
    const [board, setBoard] = useState(new IA());
    const [winner, setWinner] = useState<string | null>(null);

    const handleClick = (index: number) => {
        if (board.board[index] !== null || winner) return;

        const newBoard = new IA();
        newBoard.board = [...board.board];

        newBoard.board[index] = "X";

        const playerWon = checkWinner(newBoard.board);
        if (playerWon === "X") {
            setWinner("Você ganhou!");
            setBoard(newBoard);
            return;
        }

        const IAPlay = newBoard.nextMove();
        if (IAPlay !== -1) {
            newBoard.board[IAPlay] = "O";
        }

        const IAWon = checkWinner(newBoard.board);
        if (IAWon === "O") {
            setWinner("Você perdeu!");
            setBoard(newBoard);
            return;
        }

        if (newBoard.board.every(cell => cell !== null)) {
            setWinner("Empate!");
        }

        setBoard(newBoard);
    }

    return {
        board,
        setBoard,
        handleClick,
        winner,
        setWinner
    }
}