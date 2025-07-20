import { useContext, useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs'; // close‑icon (react‑icons)
import ClockContext from '../../context/ClockContext';
import timezones from '../../service/timezones';
import SubmitBtn from '../ui/buttons/SubmitBtn';

const initFormValues = {
  title: '',
  timezone: '',
};
const ClockPopup = ({ setIsPopupOpen }) => {
  // state hooks
  const [timeZoneSelectValue, setTimeZoneSelectValue] = useState([]);
  const [formValue, setFormValue] = useState({ ...initFormValues });
  const [isValid, setIsValid] = useState(false);
  const { timezone, title } = formValue;
  // context hooks
  const { _clockItems, setClockItems } = useContext(ClockContext);
  // Effect hooks
  useEffect(() => {
    const timeZoneValue = Object.keys(timezones).map((key) => ({
      text: `${timezones[key].timeZoneName} : ${key}`,
      value: key,
    }));
    const sortingTimezoneValue = timeZoneValue.sort((a, b) => {
      const textA = a.text.toUpperCase();
      const textB = b.text.toUpperCase();
      if (textA < textB) {
        return -1;
      }
      if (textA > textB) {
        return 1;
      }
      return 0;
    });
    setTimeZoneSelectValue(sortingTimezoneValue);
  }, []);

  const handleClockChange = (e) => {
    const { value, name } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(checkValidity(formValue));
    if (!isValid) return;
    const clockValues = {
      id: `clockId${new Date().toLocaleString()}`,
      title,
      timezone,
      events: [],
    };
    setClockItems((prev) => [clockValues, ...prev]);
    setFormValue({ ...initFormValues });
    setIsPopupOpen(false);
  };
  const checkValidity = (form) => {
    const result = Object.values(form).every((item) => item.length !== 0);
    return result;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New Clock</h2>
          <button
            onClick={() => setIsPopupOpen((prev) => !prev)}
            className="rounded-full p-1 transition hover:bg-gray-100 "
          >
            <BsX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              Clock Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleClockChange}
              placeholder="New York Office"
              name="title"
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
              onChange={handleClockChange}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/30"
            >
              <option value="">Select Timezone</option>
              {timeZoneSelectValue?.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center justify-end gap-3">
            <SubmitBtn onClick={() => setIsPopupOpen((prev) => !prev)}>
              Cancel
            </SubmitBtn>
            <SubmitBtn isValid={isValid} dark={true} type="submit">
              Add clock
            </SubmitBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClockPopup;
