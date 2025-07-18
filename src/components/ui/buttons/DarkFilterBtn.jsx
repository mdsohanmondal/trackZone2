const DarkFilterBtn = ({ typeTimezone, timezoneLength }) => {
  return (
    <button className="text-md gap-3 text-white tracking-tight bg-black hover:bg-zinc-900 border  border-zinc-300 rounded-lg cursor-pointer flex items-center justify-between px-3 py-1">
      {typeTimezone}
      <div className="flex items-center justify-center gap-1">
        <span className="text-sm bg-[#ECEEF2] text-zinc-950 w-4 h-4 p-2 flex items-center justify-center rounded-2xl">
          {timezoneLength}
        </span>{' '}
      </div>
    </button>
  );
};

export default DarkFilterBtn;
