import { useState } from 'react';
import ClockContext from './ClockContext';

const ClockContextProvider = ({ children }) => {
  const [clockItems, setClockItems] = useState([
    {
      id: `clockId${new Date().toLocaleString()}1`,
      title: 'America',
      timezone: 'UTC-5',
      events: [],
    },
    {
      id: `clockId${new Date().toLocaleString()}2`,
      title: 'New Ziland',
      timezone: 'UTC-8',
      events: [],
    },
    {
      id: `clockId${new Date().toLocaleString()}3`,
      title: 'London',
      timezone: 'UTC-3',
      events: [],
    },
    {
      id: `clockId${new Date().toLocaleString()}4`,
      title: 'Brazil',
      timezone: 'UTC-5',
      events: [],
    },
  ]);

  return (
    <ClockContext.Provider value={{ clockItems, setClockItems }}>
      {children}
    </ClockContext.Provider>
  );
};

export default ClockContextProvider;
