import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Check({ handleBingoCheck }) {
  return (
    <>
      <div className="mt-3">
        <button
          className="border:solid border-gray-400 border bg-sky-200 rounded p-3"
          onClick={handleBingoCheck}
        >
          Check if this card will get Bingo!
        </button>
      </div>
    </>
  );
}
