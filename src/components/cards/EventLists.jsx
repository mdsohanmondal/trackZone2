const EventLists = ({ item }) => {
  return (
    <div className="bg-zinc-100 px-3 py-1 rounded-lg">
      <h3 className="text-zinc-950">{item.eventTitle}</h3>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-zinc-600 text-sm">{item.startTime} to</span>
          <span className="text-zinc-600 text-sm"> {item.endTime}</span>
        </div>
        <div>
          <span className="text-blue-400 text-sm">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default EventLists;
