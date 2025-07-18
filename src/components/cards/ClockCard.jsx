import { FaCalendarMinus } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import EventLists from './EventLists';

const ClockCard = () => {
  return (
    <div className="bg-white w-80 px-5 py-3 rounded-xl border border-zinc-200 hover:shadow">
      <div className="flex items-center justify-between text-lg">
        <h3>Tokyo Office</h3>
        <div className="icons flex items-center justify-center gap-4">
          <span className="hover:bg-zinc-200 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer">
            <SlPencil />{' '}
          </span>
          <span className="hover:bg-zinc-200 w-7 h-7 flex items-center justify-center rounded-full text-red-400 cursor-pointer">
            <MdDeleteOutline />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-5">
        <h1 className="text-2xl">11:16:34 AM</h1>
        <h4 className="text-zinc-800">UTC+9 -3h</h4>
      </div>
      <div className="w-[70%] ml-auto mr-auto mt-3 mb-3 border-b border-zinc-300"></div>
      <div>
        <div className="flex items-center justify-between">
          <h3>Events</h3>
          <span className="text-blue-400 hover:bg-zinc-300 min-w-6 min-h-6 px-2 flex items-center justify-center rounded-full">
            <FaCalendarMinus />
          </span>
        </div>
        <span className="text-sm text-zinc-400">No events</span>
        <div className="events flex flex-col gap-2">
          <EventLists />
          <EventLists />
          <EventLists />
          <EventLists />
        </div>
      </div>
    </div>
  );
};

export default ClockCard;
