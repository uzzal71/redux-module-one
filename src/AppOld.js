import { useState } from "react";
import Counter from "./components/Counter";

export default function App() {
    const [counters, setCounters] = useState([<Counter key={0} />]);

  const addCounter = () => {
    const newCounters = [...counters, <Counter key={counters.length} />];
    setCounters(newCounters);
  };

    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                {counters}
            <button
            className="bg-green-400 text-white px-3 py-2 rounded shadow"
            onClick={addCounter}
            >
            Add Counter
            </button>
            </div>
        </div>
    );
}
