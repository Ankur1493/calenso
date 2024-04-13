import React from "react";

function TimeCard({ time, isSelected, onSelect }) {
  return (
    <div className="flex gap-2">
      <button
        data-testid="time"
        data-disabled="false"
        data-time={time}
        className={`whitespace-nowrap items-center text-sm font-medium relative rounded-md transition text-mainText font-heading border border-gray-400 border-opacity-40 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 px-4 min-h-9 hover:border-mainText hover:border-opacity-60 mb-2 flex h-auto w-[150px] flex-grow flex-col justify-center py-2 ${
          isSelected ? "border-mainText border-opacity-100" : ""
        }`}
        type="button"
        onClick={() => onSelect(time)}
      >
        <div className="flex items-center gap-2">{time}</div>
      </button>
    </div>
  );
}

export default TimeCard;
