import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Upcoming({
  numbers,
  numbersEntered,
  handleBingoCheck,
  setNumbers,
}) {
  return (
    <>
      <div>Enter the upcoming numbers:</div>
      <div className="text-xs">Seperate by a comma</div>
      <div className="mt-3">
        <form>
          <input
            type="text"
            defaultValue={numbers}
            ref={numbersEntered}
            onChange={(e) => setNumbers(e.target.value)}
            className="border:solid border-gray-400 border rounded p-3 w-full"
          />
        </form>
      </div>
    </>
  );
}
