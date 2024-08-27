'use client'

import { useState } from "react";
import { IA } from "../../../src/IA";

export default function Home() {
  const [board, setBoard] = useState(new IA());

  const handleClick = (index: number) => {
    const newBoard = new IA();
    newBoard.board = [...board.board];
    newBoard.board[index] = "X";
    const IAPlay = newBoard.nextMove();
    if (IAPlay !== -1) {
      newBoard.board[IAPlay] = "O";
    }
    setBoard(newBoard);
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-3 gap-2 w-96 h-96 mt-48">
        {board.board.map((value, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="w-full h-full flex justify-center items-center bg-yellow-900 text-white text-3xl font-bold border border-black cursor-pointer"
          >
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
