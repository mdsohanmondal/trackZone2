import { useContext, useEffect, useState } from 'react';
import { FaCalendarMinus } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { SlPencil } from 'react-icons/sl';
import ClockContext from '../../context/ClockContext';
import timezones from '../../service/timezones';
import AlertPopup from '../popups/AlertPopup';
import EventLists from './EventLists';
const ClockCard = ({ item, events, setIsPopupOpenEvent }) => {
  const [timezoneTime, setTimezoneTime] = useState(null);
  const [isDeletePopupView, setIsDeletePopupView] = useState(false);
  // const [isEventPopupShow, setIsEventPopupShow] = useState(false);
  const { clockItems, setClockItems } = useContext(ClockContext);
  useEffect(() => {
    const timezoneValue = timezones[item.timezone];

    setInterval(() => {
      const date = new Date();
      const foreignTime = date.toLocaleString(timezoneValue.localCode, {
        timeZone: timezoneValue.timeZoneId,
      });
      setTimezoneTime(foreignTime);
    }, 1000);
  }, []);

  const handleDeleteClock = (id) => {
    const findDeleteClock = clockItems.filter((item) => item.id !== id);
    setClockItems(findDeleteClock);
  };
  const hideTheDeletePopup = () => {
    setIsDeletePopupView(false);
  };

  return (
    <div className="bg-white w-80 px-5 py-3 rounded-xl border border-zinc-200 hover:shadow">
      {isDeletePopupView && (
        <AlertPopup
          message="Do you really want to delete this clock"
          onCancel={hideTheDeletePopup}
          onConfirm={() => handleDeleteClock(item.id)}
        />
      )}

      <div className="flex items-center justify-between text-lg">
        <h3>{item.title}</h3>
        <div className="icons flex items-center justify-center gap-4">
          <span className="hover:bg-zinc-200 w-7 h-7 flex items-center justify-center rounded-full cursor-pointer">
            <SlPencil />{' '}
          </span>
          <span
            onClick={() => setIsDeletePopupView(true)}
            className="hover:bg-zinc-200 w-7 h-7 flex items-center justify-center rounded-full text-red-400 cursor-pointer"
          >
            <MdDeleteOutline />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-5">
        <h1 className="text-xl text-zinc-600">{timezoneTime}</h1>
        <h4 className="text-zinc-800">{item.timezone}</h4>
      </div>
      <div className="w-[70%] ml-auto mr-auto mt-3 mb-3 border-b border-zinc-300"></div>
      <div>
        <div className="flex items-center justify-between">
          <h3>Events</h3>
          <span
            onClick={() => {
              setIsPopupOpenEvent(true);
            }}
            className="text-blue-400 hover:bg-zinc-300 min-w-6 min-h-6 px-2 flex items-center justify-center rounded-full"
          >
            <FaCalendarMinus />
          </span>
        </div>
        {!item && <span className="text-sm text-zinc-400">No events</span>}
        <div className="events flex flex-col gap-2">
          {events?.map((item) => (
            <EventLists key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClockCard;
