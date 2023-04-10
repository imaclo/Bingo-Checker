export default function CheckThree({ checkThree }) {
  return (
    <>
      <div className="mt-3">
        <button
          className="border:solid border-gray-400 border bg-sky-200 rounded p-3"
          onClick={checkThree}
        >
          Check if any of these three cards will win
        </button>
      </div>
    </>
  );
}
