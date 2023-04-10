import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Upcoming({ cardPretty, numbersEntered, formatCard }) {
  return (
    <>
      <div>Enter your Bingo! card:</div>
      <div className="text-xs">Seperate numbers by a comma, 5 to a line</div>
      <div className="mt-3">
        <form>
          <textarea
            type="text"
            rows={5}
            cols={30}
            defaultValue={cardPretty}
            ref={numbersEntered}
            onChange={(e) => formatCard(e.target.value, "card")}
            className="border:solid border-gray-400 border rounded p-3 "
          />
        </form>
      </div>
    </>
  );
}
