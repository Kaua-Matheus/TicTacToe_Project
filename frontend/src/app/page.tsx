'use client';
import useExecute from "@/hooks/useExecute";
import { IA } from "../../../src/IA";

export default function Home() {
  const { board, handleClick, winner, setBoard, setWinner } = useExecute();

  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <div className="grid grid-cols-3 gap-2 w-96 h-96">
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
      {winner && (
      <div className="absolute bg-white/80 p-4 rounded-lg w-full h-full flex justify-start items-center flex-col">
        <div className="mt-16 flex justify-center items-center flex-col space-y-28">
        <p className={`text-8xl ${winner === 'Você ganhou!' ? "text-green-500" : "text-red-500"}`}>{winner}</p>
        <button 
        className="bg-zinc-900 p-6 rounded-lg"
        onClick={() => {
          setBoard(new IA())
          setWinner(null)
          }}>Jogar novamente</button>
        </div>
      </div>
      )}
    </div>
  );
}
