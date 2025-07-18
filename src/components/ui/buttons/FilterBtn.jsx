const FilterBtn = ({ typeTimezone, eventLength, timezoneLength }) => {
  return (
    <button className="text-md gap-3 tracking-tight bg-white hover:bg-zinc-100 border  border-zinc-300 rounded cursor-pointer flex items-center justify-between px-3 py-1">
      {typeTimezone}
      <div className="flex items-center justify-center gap-1">
        <span className="text-sm bg-[#ECEEF2] w-4 h-4 p-3 flex items-center justify-center rounded-2xl">
          {timezoneLength}
        </span>{' '}
        {eventLength && (
          <span className="text-sm border border-zinc-400 px-2 rounded-lg">
            {eventLength} events
          </span>
        )}
      </div>
    </button>
  );
};

export default FilterBtn;
