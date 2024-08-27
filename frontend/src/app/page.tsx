import { useState } from "react";
import { IA } from "../../../src/IA";

export default function Home() {
  const [board, setBoard] = useState(new IA())

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-3 gap-2 w-64 h-64">
        {board.board.map((_, index) => (
          <div
            key={index}
            className="w-full h-full flex justify-center items-center bg-yellow-900 text-white text-3xl font-bold border border-black cursor-pointer"
          >
            {board.board[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
