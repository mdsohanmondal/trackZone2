import { useContext, useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';
import ClockContext from '../../context/ClockContext';
import timezones from '../../service/timezones';
import SubmitBtn from '../ui/buttons/SubmitBtn';

const initFormValue = {
  startTime: '',
  endTime: '',
  eventTitle: '',
  timezone: '',
};
const EventPopup = ({ setIsPopupOpenEvent }) => {
  const [formValue, setFormValue] = useState({ ...initFormValue });
  const [filterClockTimezoneValues, setFilterClockTimezoneValues] = useState(
    []
  );
  const { startTime, endTime, eventTitle, timezone } = formValue;
  const { clockItems } = useContext(ClockContext);

  useEffect(() => {
    const filterTimezones = clockItems.map((clock) => {
      return {
        ...timezones[clock.timezone],
        keyName: clock.timezone,
        clockTitle: clock.title,
      };
    });
    setFilterClockTimezoneValues(filterTimezones);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const findClock = clockItems.find((item) => item.timezone === timezone);
    const newEvent = {
      id: new Date(),
      clockId: findClock.id,
      startTime,
      endTime,
      eventTitle,
      timezone,
    };
    findClock.events.push(newEvent);
    console.log(newEvent);
    setIsPopupOpenEvent(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Add New Event</h2>
          <button
            onClick={() => setIsPopupOpenEvent(false)}
            className="rounded-full p-1 transition hover:bg-gray-100"
          >
            <BsX className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Event Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="New York Office"
              name="eventTitle"
              value={eventTitle}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-gray-700"
            >
              Timezone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={timezone}
              onChange={handleChange}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            >
              <option value="">Select Timezone</option>

              {filterClockTimezoneValues?.map((item) => (
                <option
                  key={`${item.keyName}-${item.timeZoneName}`}
                  value={item.keyName}
                >
                  {`${item.clockTitle}`}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center justify-center gap-2">
            {/* Start Time */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="start-time"
                className="text-sm font-medium text-gray-700"
              >
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                value={startTime}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              />
            </div>

            {/* End Time */}
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="end-time"
                className="text-sm font-medium text-gray-700"
              >
                End Time
              </label>
              <input
                type="time"
                name="endTime"
                value={endTime}
                onChange={handleChange}
                className="rounded-lg border border-gray-300 px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
              />
            </div>
          </div>
          {/* Buttons */}
          <div className="mt-4 flex items-center justify-end gap-3">
            <SubmitBtn onClick={() => setIsPopupOpenEvent(false)}>
              Cancel
            </SubmitBtn>
            <SubmitBtn isValid={true} dark={true} type="submit">
              Add Event
            </SubmitBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventPopup;
