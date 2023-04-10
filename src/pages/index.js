import React from "react";
import Head from "next/head";
import { useState, useRef } from "react";
import Upcoming from "@/components/Upcoming";
import Card from "@/components/Card";
import ThreeCards from "@/components/ThreeCards";
import Check from "@/components/Check";
import CheckThree from "@/components/CheckThree";
import Modal from "@/components/Modal";

export default function Home() {
  const checkForBingo = (numbers, bingoCard) => {
    // Turn the numbers into an array
    const input = numbers.split(",").map(Number);

    // Make an array to check the numbers
    const matched = new Array(5).fill().map(() => new Array(5).fill(false));

    // Now we hve to go through the array asnd look for a match
    input.forEach((num) => {
      bingoCard.forEach((row, i) => {
        const j = row.indexOf(num);
        if (j !== -1) {
          matched[i][j] = true;
        }
      });
    });

    // Look for column, row or diag match
    for (let i = 0; i < 5; i++) {
      // Row
      if (matched[i].every((val) => val === true)) {
        return true;
      }
      // Column
      if (matched.every((row) => row[i] === true)) {
        return true;
      }
    }
    //  Diagonal top left to bottom right
    if (matched[0][0] && matched[1][1] && matched[3][3] && matched[4][4]) {
      return true;
    }
    // Diagonal  bottom left to top right
    if (matched[0][4] && matched[1][3] && matched[3][1] && matched[4][0]) {
      return true;
    }
    // If no match
    return false;
  };

  // Set the default numbers or allow a new set
  const [numbers, setNumbers] = useState(
    "7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18, 20, 8, 19, 3, 26, 1"
  );

  const numbersEntered = useRef(null);

  // Set the defautl card or allow a new one
  const [card, setCard] = useState([
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ]);

  // make it look pretty on screen
  const cardPretty = card.map((array) => array.join(" ")).join("\n");

  // this will turn any changes to a card into something we can work with
  function formatCard(e, whichCard) {
    const formattedInput = e
      .trim()
      .split("\n")
      .map((row) => {
        return row
          .trim()
          .split(" ")
          .map((number) => parseInt(number));
      });
    const result = functionMap[whichCard](formattedInput);
  }

  // Set the default for card A or allow a new one
  const [cardA, setCardA] = useState([
    [22, 13, 17, 11, 0],
    [8, 2, 23, 4, 24],
    [21, 9, 14, 16, 7],
    [6, 10, 3, 18, 5],
    [1, 12, 20, 15, 19],
  ]);

  // make it look pretty on screen
  const cardApretty = cardA.map((array) => array.join(" ")).join("\n");

  // Set the default for card B or allow a new one
  const [cardB, setCardB] = useState([
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ]);

  // make it look pretty on screen
  const cardBpretty = cardB.map((array) => array.join(" ")).join("\n");

  // Set the default for card C or allow a new one
  const [cardC, setCardC] = useState([
    [14, 21, 17, 24, 4],
    [10, 16, 15, 9, 19],
    [18, 8, 23, 26, 20],
    [22, 11, 13, 6, 5],
    [2, 0, 12, 3, 7],
  ]);

  // make it look pretty on screen
  const cardCpretty = cardC.map((array) => array.join(" ")).join("\n");

  //this will let us use strings as functions
  const functionMap = {
    card: setCard,
    cardA: setCardA,
    cardB: setCardB,
    cardC: setCardC,
  };

  // this will get the check results and let us do something with the result
  function handleBingoCheck() {
    const hasBingo = numbers(numbers, card);

    if (hasBingo) {
      setModalTitle("Congratulations!");
      setModalText("This Bingo! card, with these numbers will get Bingo!");
      setIsOpen(true);
    } else {
      setModalTitle("Sorry");
      setModalText(
        "This Bingo! card will not ever get Bingo! with those numbers"
      );
      setIsOpen(true);
    }
  }

  // this will check the three cards if theu will get bingo
  function checkThree() {
    const hasBingoA = checkBingo(numbers, cardA);
    const hasBingoB = checkBingo(numbers, cardB);
    const hasBingoC = checkBingo(numbers, cardC);

    setModalText("");

    setModalTitle("");
    hasBingoA &&
      setModalText((prevText) => [
        ...prevText,
        "Card A will get Bingo! with these numbers.\n",
      ]);

    hasBingoB &&
      setModalText((prevText) => [
        ...prevText,
        "Card B will get Bingo! with these numbers.\n",
      ]);

    hasBingoC &&
      setModalText((prevText) => [
        ...prevText,
        "Card C will get Bingo! with these numbers.\n",
      ]);

    setIsOpen(true);
  }

  // this is for the result modal
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <title>Bingo checker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mt-10">
        <div className="text-4xl">
          <h1>Bingo! checker</h1>
        </div>

        <div>
          <Upcoming numbers={numbers} setNumbers={setNumbers}></Upcoming>
        </div>

        <div className="mt-5">
          <Card
            cardPretty={cardPretty}
            numbersEntered={numbersEntered}
            formatCard={formatCard}
          ></Card>
        </div>

        <div className="mt-5">
          <Check handleBingoCheck={handleBingoCheck}></Check>
        </div>

        <div className="mt-5">
          <ThreeCards
            cardApretty={cardApretty}
            cardBpretty={cardBpretty}
            cardCpretty={cardCpretty}
            formatCard={formatCard}
          ></ThreeCards>
        </div>

        <div className="mt-5">
          <CheckThree checkThree={checkThree}></CheckThree>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        modalTitle={modalTitle}
        modalText={modalText}
      ></Modal>
    </>
  );
}
