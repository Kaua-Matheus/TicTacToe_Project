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

      <div className='p-2 bg-gray-300 m-10 h-40 flex content-center shadow-sm shadow-black'>
        
        <div className='flex'>
          <div className='bg-gray-300 border-black border w-32 text-center'>
          <aside className="m-3 row-auto">Player{}</aside>
          <aside className='m-3 row-auto text-yellow-600 text-lg'>PONTOS {}</aside>
          </div>
          <div className='mx-2 bg-gray-300 border-black border w-32 text-center'>
          <aside className="m-3 row-auto">Inteligência</aside>
          <aside className='m-3 row-auto text-yellow-600 text-lg'>PONTOS {}</aside>
          </div>
        </div>

      <button className="p-5 bg-gray-300 text-black shadow-sm shadow-black hover:bg-black hover:text-yellow-300">Restart</button>
      </div>
      

      
      <div className="grid grid-cols-3 gap-2 w-96 h-96 mt-48">
        {board.board.map((value, index) => (
          <div
            onClick={() => handleClick(index)}
            key={index}
            className="w-full h-full flex justify-center items-center bg-gray-600 text-yellow-600 text-3xl font-bold border border-black cursor-pointer shadow-md shadow-black hover:shadow-sm"
          >
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
