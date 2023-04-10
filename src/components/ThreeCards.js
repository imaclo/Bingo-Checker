import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function Three({
  cardApretty,
  cardBpretty,
  cardCpretty,
  formatCard,
}) {
  return (
    <>
      <div>Find the best card:</div>
      <div className="text-xs">Seperate numbers by a comma, 5 to a line</div>

      <div className="grid grid-cols-3 gap-4">
        <div className="mt-3">
          <form>
            Card A
            <textarea
              type="text"
              rows={5}
              cols={30}
              defaultValue={cardApretty}
              onChange={(e) => formatCard(e.target.value, "cardA")}
              className="border:solid border-gray-400 border rounded p-3 "
            />
          </form>
        </div>

        <div className="mt-3">
          <form>
            Card B
            <textarea
              type="text"
              rows={5}
              cols={30}
              defaultValue={cardBpretty}
              onChange={(e) => formatCard(e.target.value, "cardB")}
              className="border:solid border-gray-400 border rounded p-3 "
            />
          </form>
        </div>

        <div className="mt-3">
          <form>
            Card C
            <textarea
              type="text"
              rows={5}
              cols={30}
              defaultValue={cardCpretty}
              onChange={(e) => formatCard(e.target.value, "cardC")}
              className="border:solid border-gray-400 border rounded p-3 "
            />
          </form>
        </div>
      </div>
    </>
  );
}
