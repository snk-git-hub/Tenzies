import { useState } from "react";

function generateAllDice() {
  return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
}

function Dies({ value }) {
  return (
    <div className="bg-gray-200 w-24 h-24 rounded-lg shadow-md flex items-center justify-center text-2xl font-bold">
      {value}
    </div>
  );
}

function Button({onClick}) {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      onClick={onClick}
    >
      Roll Dice
    </button>
  );
}

function App() {
  const [dice, setDice] = useState(generateAllDice());
  function roll(){
    setDice(generateAllDice());
  }
  const diceElements = dice.map((num, index) => <Dies key={index} value={num} />);

  return (
    <div>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl p-6 w-[1000px] h-[1000px] shadow-lg flex flex-col items-center justify-between">
          <div className="grid grid-cols-5 gap-30 py-10 justify-center items-center max-w-[600px] pr-25">
            {diceElements}
          </div>
          <div className="pb-12">
            <Button onClick={roll} />
          </div>
        </div>
      </div>
    </div>
  );
 
}


export default App;
