import { useState } from "react";

const CountComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col gap-2.5 items-center">
      <p>Count is: {count}</p>

      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        className="border p-2 rounded w-40 text-center"
        placeholder="Enter value"
      />

      <button
        onClick={() => setCount(count + 1)}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Increment
      </button>
    </div>
  );
};

export default CountComponent;
